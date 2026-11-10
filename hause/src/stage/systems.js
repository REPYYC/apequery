// Service networks drawn inside the glass house: electrical (netE), water (netW), air (netA) and radon (netR).
// Each network is a set of glowing tubes with particles flowing along them; update() reveals a network by its 0..1 value.
import * as THREE from "three";
import { clamp, lerp } from "./util.js";
import { dotTexture } from "./textures.js";
// colour of each kind of line
const COLORS = {
  wire: 16761963,
  cold: 5220095,
  hot: 16739151,
  drain: 10135476,
  supply: 9433288,
  ret: 9083903,
  radon: 14257407,
};
// brightness multiplier for the glow tubes and the flowing particles
const FLOW = 2.4;
// house: the object the network groups are added to; reduce: reduced motion (no soil gas particles)
export function createSystems({ house: house, reduce: reduce }) {
  const vec3 = (x, y, z) => new THREE.Vector3(x, y, z),
    dotTex = dotTexture("rgba(255,255,255,0.6)"),
    // per network: the tube + glow meshes of every run
    runs = {
      netE: [],
      netW: [],
      netA: [],
      netR: [],
    },
    // per network: the particle streams that follow the runs
    flows = {
      netE: [],
      netW: [],
      netA: [],
      netR: [],
    },
    groups = {};
  // one group per network, added to the house and hidden until update() reveals it
  Object.keys(runs).forEach((net) => {
    groups[net] = new THREE.Group();
    groups[net].visible = false;
    groups[net].userData.noAO = true;
    house.add(groups[net]);
  });
  // path of straight segments through a list of points
  const polylinePath = (points) => {
    const path = new THREE.CurvePath();
    for (let i = 1; i < points.length; i++) {
      path.add(new THREE.LineCurve3(points[i - 1], points[i]));
    }
    return path;
  };
  // adds one run to a network: a bright tube, a wider additive glow tube around it and,
  // when `flow` ({ density, speed, color }) is given, a stream of particles along it
  function addRun(net, points, color, radius, flow) {
    const path = polylinePath(points.map((point) => vec3(point[0], point[1], point[2]))),
      pathLength = path.getLength(),
      segments = Math.max(6, Math.round(pathLength * 7)),
      radialSegments = 6,
      tubeMat = new THREE.MeshBasicMaterial({
        color: color,
        toneMapped: false,
        fog: false,
        transparent: true,
      });
    tubeMat.color.multiplyScalar(1.5);
    const tube = new THREE.Mesh(new THREE.TubeGeometry(path, segments, radius, radialSegments, false), tubeMat),
      glowMat = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.2,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        toneMapped: false,
        fog: false,
      });
    glowMat.color.multiplyScalar(FLOW);
    const glow = new THREE.Mesh(new THREE.TubeGeometry(path, segments, radius * 3.4, radialSegments, false), glowMat);
    tube.renderOrder = 7;
    glow.renderOrder = 8;
    tube.userData.noAO = glow.userData.noAO = true;
    tube.raycast = glow.raycast = () => {};
    groups[net].add(tube, glow);
    runs[net].push({
      tube: tube,
      glow: glow,
      segs: segments,
      radial: radialSegments,
      gmat: glowMat,
    });
    if (flow) {
      flows[net].push({
        curve: path,
        len: pathLength,
        n: Math.max(3, Math.round(pathLength * flow.density)),
        speed: flow.speed,
        color: flow.color || color,
      });
    }
  }
  // electrical: service drop sagging from the pole in the back lane to the house, then down past the meter and in to the panel
  const serviceDrop = [];
  for (let i = 0; i <= 10; i++) {
    const frac = i / 10;
    serviceDrop.push([2.8, lerp(9.1, 7.7, frac) - 1 * Math.sin(Math.PI * frac), lerp(-15.5, -4.45, frac)]);
  }
  addRun("netE", [...serviceDrop, [2.8, 1.45, -4.3], [2.8, -0.35, -4.3], [2.8, -0.35, -3.86], [2.8, -0.72, -3.86]], COLORS.wire, 0.045, {
    density: 2.2,
    speed: 6,
  });
  // electrical: circuits running from the top of the panel through the house
  const panelTop = [2.8, -0.72, -3.78],
    abovePanel = [2.8, -0.2, -3.78];
  addRun("netE", [panelTop, abovePanel, [2.2, -0.2, -3.78], [2.2, 1.35, -3.9], [4.6, 1.35, -3.9]], COLORS.wire, 0.032, {
    density: 2.5,
    speed: 5,
  });
  addRun(
    "netE",
    [
      panelTop,
      abovePanel,
      [4.94, -0.2, -3.78],
      [4.94, -0.2, 3.7],
      [4.94, 0.6, 3.92],
      [1.45, 0.6, 3.92],
      [1.45, 2.45, 3.92],
      [0.05, 2.45, 3.92],
      [0.05, 0.6, 3.92],
      [-4.94, 0.6, 3.92],
      [-4.94, 0.6, -3.2],
    ],
    COLORS.wire,
    0.032,
    {
      density: 2.5,
      speed: 5,
    },
  );
  addRun(
    "netE",
    [panelTop, abovePanel, [4.94, -0.2, -3.78], [4.94, 3.85, -3.78], [4.94, 3.85, 3.92], [-4.94, 3.85, 3.92], [-4.94, 3.85, -2.4]],
    COLORS.wire,
    0.032,
    {
      density: 2.5,
      speed: 5,
    },
  );
  addRun(
    "netE",
    [panelTop, abovePanel, [1.28, -0.2, -3.78], [1.28, -0.2, -1], [1.28, 3.05, -1], [-1.5, 3.05, -1], [-1.5, 3.05, 0.5]],
    COLORS.wire,
    0.03,
    {
      density: 2.5,
      speed: 5,
    },
  );
  addRun(
    "netE",
    [
      [1.28, 3.05, -1],
      [3, 3.05, -1],
      [3, 3.05, -1.6],
    ],
    COLORS.wire,
    0.03,
    {
      density: 2.5,
      speed: 5,
    },
  );
  addRun("netE", [panelTop, abovePanel, [4.94, -0.2, -3.78], [4.94, -0.2, 2.5], [4.94, 1.3, 2.5], [5.1, 1.3, 2.5]], COLORS.wire, 0.034, {
    density: 2.5,
    speed: 5,
  });
  // water: cold supply coming in from the street side to the heater, then cold branches to the fixtures
  addRun(
    "netW",
    [
      [-0.5, -2.2, 16],
      [-0.5, -2.2, 3.75],
      [-0.5, -0.32, 3.75],
      [-0.5, -0.32, -3],
      [-1.95, -0.32, -3],
      [-1.95, -1.35, -3],
    ],
    COLORS.cold,
    0.072,
    {
      density: 2,
      speed: 2.4,
    },
  );
  addRun(
    "netW",
    [
      [-0.5, -0.32, -3.2],
      [2.4, -0.32, -3.2],
      [2.4, -0.32, -3.7],
      [2.4, 1.05, -3.7],
    ],
    COLORS.cold,
    0.051,
    {
      density: 2,
      speed: 2.4,
    },
  );
  addRun(
    "netW",
    [
      [-0.5, -0.32, -3.45],
      [-2.3, -0.32, -3.45],
      [-2.3, 3.95, -3.45],
      [-2.3, 3.95, -3.62],
    ],
    COLORS.cold,
    0.051,
    {
      density: 2,
      speed: 2.4,
    },
  );
  addRun(
    "netW",
    [
      [-2.3, 3.6, -3.45],
      [-3.4, 3.6, -3.45],
    ],
    COLORS.cold,
    0.051,
    {
      density: 2,
      speed: 2.4,
    },
  );
  // water: hot lines from the heater to the fixtures
  addRun(
    "netW",
    [
      [-2.2, -1.35, -3],
      [-2.2, -0.46, -3],
      [-2.2, -0.46, -3.32],
      [2.55, -0.46, -3.32],
      [2.55, -0.46, -3.72],
      [2.55, 1.05, -3.72],
    ],
    COLORS.hot,
    0.051,
    {
      density: 2,
      speed: 2.4,
    },
  );
  addRun(
    "netW",
    [
      [-2.2, -0.46, -3.32],
      [-2.47, -0.46, -3.32],
      [-2.47, 3.95, -3.32],
      [-2.47, 3.95, -3.6],
    ],
    COLORS.hot,
    0.051,
    {
      density: 2,
      speed: 2.4,
    },
  );
  addRun(
    "netW",
    [
      [-2.47, 3.6, -3.32],
      [-3.5, 3.6, -3.32],
    ],
    COLORS.hot,
    0.051,
    {
      density: 2,
      speed: 2.4,
    },
  );
  // water: drains running down and out to the sewer lateral behind the house
  addRun(
    "netW",
    [
      [-3.6, 3.48, -3.62],
      [-2.6, 3.48, -3.62],
      [-2.6, -2.95, -3.62],
      [0.6, -2.95, -3.62],
      [0.6, -3.2, -4.3],
      [0.6, -3.45, -9.5],
    ],
    COLORS.drain,
    0.087,
    {
      density: 1.6,
      speed: 2.8,
    },
  );
  addRun(
    "netW",
    [
      [2.6, 0.95, -3.86],
      [2.6, -2.9, -3.86],
      [0.75, -2.9, -3.86],
    ],
    COLORS.drain,
    0.072,
    {
      density: 1.6,
      speed: 2.8,
    },
  );
  // water: upper part of the drain stack (no particles)
  addRun(
    "netW",
    [
      [-2.6, 3.48, -3.62],
      [-2.6, 10.2, -3.62],
    ],
    COLORS.drain,
    0.065,
    null,
  );
  // air: supply trunk from the top of the furnace and its branches up to the registers
  const furnaceTop = [-3.3, -1.15, -2.6],
    aboveFurnace = [-3.3, -0.12, -2.6];
  addRun("netA", [furnaceTop, aboveFurnace, [2.6, -0.12, -2.6], [4.4, -0.12, -2.6], [4.4, -0.12, -1.2], [4.4, 0.34, -1.2]], COLORS.supply, 0.091, {
    density: 1.6,
    speed: 3.2,
  });
  addRun("netA", [aboveFurnace, [-2, -0.12, -2.6], [-2, -0.12, 3.4], [-2, 0.34, 3.4]], COLORS.supply, 0.078, {
    density: 1.6,
    speed: 3.2,
  });
  addRun(
    "netA",
    [
      [3.1, -0.12, -2.6],
      [3.1, -0.12, 3.45],
      [3.1, 0.34, 3.45],
    ],
    COLORS.supply,
    0.078,
    {
      density: 1.6,
      speed: 3.2,
    },
  );
  addRun(
    "netA",
    [
      [1.28, -0.12, -2.6],
      [1.28, 3.35, -2.6],
      [3.8, 3.35, -2.6],
      [3.8, 3.35, 2.9],
      [3.8, 3.52, 2.9],
    ],
    COLORS.supply,
    0.078,
    {
      density: 1.6,
      speed: 3.2,
    },
  );
  addRun(
    "netA",
    [
      [1.28, 3.35, -2.6],
      [-3.8, 3.35, -2.6],
      [-3.8, 3.35, 2],
      [-3.8, 3.52, 2],
    ],
    COLORS.supply,
    0.078,
    {
      density: 1.6,
      speed: 3.2,
    },
  );
  // air: return running back down to the furnace
  addRun(
    "netA",
    [
      [-1.75, 5.6, 1],
      [-1.75, -0.32, 1],
      [-3.3, -0.32, 1],
      [-3.3, -0.32, -2.15],
      [-3.3, -1.05, -2.15],
    ],
    COLORS.ret,
    0.091,
    {
      density: 1.6,
      speed: 2.4,
    },
  );
  // radon: vertical stack from the slab to above the roof
  addRun(
    "netR",
    [
      [-1.2, -2.92, -1.5],
      [-1.2, 11.6, -1.5],
    ],
    COLORS.radon,
    0.075,
    {
      density: 2.2,
      speed: 2.6,
    },
  );
  // flow particles: one point cloud per network, coloured per stream
  const flowPoints = {},
    tmpColor = new THREE.Color(),
    white = new THREE.Color(16777215);
  Object.keys(flows).forEach((net) => {
    const netFlows = flows[net];
    if (!netFlows.length) {
      return;
    }
    const count = netFlows.reduce((sum, flow) => sum + flow.n, 0),
      geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(count * 3), 3));
    let colors = new Float32Array(count * 3),
      index = 0;
    netFlows.forEach((flow) => {
      tmpColor.set(flow.color).lerp(white, 0.45).multiplyScalar(FLOW);
      for (let i = 0; i < flow.n; i++, index++) {
        colors[index * 3] = tmpColor.r;
        colors[index * 3 + 1] = tmpColor.g;
        colors[index * 3 + 2] = tmpColor.b;
      }
    });
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const mat = new THREE.PointsMaterial({
        size: net === "netE" ? 0.2 : 0.26,
        map: dotTex,
        vertexColors: true,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        toneMapped: false,
        fog: false,
      }),
      points = new THREE.Points(geo, mat);
    points.frustumCulled = false;
    points.renderOrder = 9;
    points.raycast = () => {};
    groups[net].add(points);
    flowPoints[net] = points;
  });
  // soil gas: particles under the slab that drift to the radon suction pit (none when `reduce` is set)
  const gasCount = reduce ? 0 : 260,
    gasGeo = new THREE.BufferGeometry(),
    gasPos = new Float32Array(gasCount * 3),
    gasSpeed = new Float32Array(gasCount),
    suctionPit = vec3(-1.2, -2.95, -1.5),
    spawnGas = (i) => {
      gasPos[i * 3] = (Math.random() - 0.5) * 9.4;
      gasPos[i * 3 + 1] = -3.05 - Math.random() * 1.6;
      gasPos[i * 3 + 2] = (Math.random() - 0.5) * 7.4;
      gasSpeed[i] = 0.4 + Math.random() * 0.8;
    };
  for (let i = 0; i < gasCount; i++) {
    spawnGas(i);
  }
  gasGeo.setAttribute("position", new THREE.BufferAttribute(gasPos, 3));
  const gasMat = new THREE.PointsMaterial({
      color: new THREE.Color(COLORS.radon).multiplyScalar(FLOW),
      size: 0.2,
      map: dotTexture("rgba(217,140,255,0.6)"),
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      toneMapped: false,
      fog: false,
    }),
    gasPts = new THREE.Points(gasGeo, gasMat);
  gasPts.frustumCulled = false;
  gasPts.raycast = () => {};
  groups.netR.add(gasPts);
  const tmpVec = new THREE.Vector3(),
    // eased opacity factor of each network (dimmed while another network has the focus)
    netAlpha = {
      netE: 1,
      netW: 1,
      netA: 1,
      netR: 1,
    };
  // per frame (S = eased stage state): reveals each network by its 0..1 value in S, dims the networks out of focus
  // and moves the particles
  function update(S, focus, t, dt) {
    // the networks only show while the house is not pulled apart
    const assembled = S.explode < 0.06;
    Object.keys(runs).forEach((net) => {
      const reveal = S[net],
        group = groups[net];
      group.visible = assembled && reveal > 0.003;
      if (!group.visible) {
        return;
      }
      const targetAlpha = !focus || focus === net ? 1 : 0.2,
        alpha = (netAlpha[net] = lerp(netAlpha[net], targetAlpha, Math.min(1, dt * 4)));
      // draw each tube only up to the revealed part of its length
      runs[net].forEach((run) => {
        const drawCount = Math.floor(clamp(reveal, 0, 1) * run.segs) * run.radial * 6;
        run.tube.geometry.setDrawRange(0, drawCount);
        run.glow.geometry.setDrawRange(0, drawCount);
        run.tube.material.opacity = alpha;
        run.gmat.opacity = (0.22 + 0.1 * Math.sin(t * 3 + run.segs)) * alpha;
      });
      // move the particles along their paths; those beyond the revealed part are parked out of sight
      const points = flowPoints[net];
      if (points) {
        let pos = points.geometry.attributes.position.array,
          index = 0;
        flows[net].forEach((flow) => {
          for (let i = 0; i < flow.n; i++, index++) {
            const along = (i / flow.n + (t * flow.speed) / flow.len) % 1;
            if (along > reveal) {
              pos[index * 3 + 1] = -999;
              continue;
            }
            flow.curve.getPointAt(along, tmpVec);
            pos[index * 3] = tmpVec.x;
            pos[index * 3 + 1] = tmpVec.y;
            pos[index * 3 + 2] = tmpVec.z;
          }
        });
        points.geometry.attributes.position.needsUpdate = true;
        points.material.opacity = clamp(reveal * 3, 0, 1) * alpha;
      }
    });
    // soil gas: step every particle towards the suction pit and respawn it on arrival
    if (gasCount && groups.netR.visible) {
      gasMat.opacity = clamp(S.netR * 2, 0, 0.9) * netAlpha.netR;
      for (let i = 0; i < gasCount; i++) {
        tmpVec.set(suctionPit.x - gasPos[i * 3], suctionPit.y - gasPos[i * 3 + 1], suctionPit.z - gasPos[i * 3 + 2]);
        const dist = tmpVec.length();
        if (dist < 0.25) {
          spawnGas(i);
          continue;
        }
        tmpVec.multiplyScalar((dt * gasSpeed[i] * 1.1) / dist);
        gasPos[i * 3] += tmpVec.x + Math.sin(t + i) * dt * 0.15;
        gasPos[i * 3 + 1] += tmpVec.y;
        gasPos[i * 3 + 2] += tmpVec.z;
      }
      gasGeo.attributes.position.needsUpdate = true;
    }
  }
  return {
    groups: groups,
    update: update,
  };
}
