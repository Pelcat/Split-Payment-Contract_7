const fs = require('fs');
const HDWalletProvider = require("truffle-hdwallet-provider");
const secrets = JSON.parse(
    fs.readFileSync(".secrets").toString().trim()
);

module.exports = {
    networks: {
        kovan: {
            provider: () =>
                new HDWalletProvider(
                    secrets.seed,
                    `https://kovan.infura.io/v3/${secrets.projectId}`
                ),
            network_id: 42
        }
    }
}