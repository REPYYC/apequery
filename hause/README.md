# HAUSE.ca

Static site for hause.ca, the home-service network. Being rebuilt after a container reset; full notes follow once the upgrade lands.

    cd hause
    npm install
    npm run build      # src/stage -> public/assets/stage.js
    npm run network    # data/network.json -> directory block in public/index.html
    npx wrangler deploy
