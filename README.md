Visual Studio Code: [Download](https://code.visualstudio.com/)
- Node.js: [Download](https://nodejs.org/)
- Git: [Download](https://git-scm.com/downloads)
- Ganache: [Download](https://www.trufflesuite.com/ganache)
- MetaMask: [Chrome](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/)

### Create, Compile & Deploy Smart Contract

1. Clone the project: `git clone https://github.com/faizack619/Supply-Chain-Blockchain.git`
2. Install Truffle: `npm install -g truffle`
3. Install dependencies: `npm i`
4. Compile: `truffle compile`
5. Deploy: `truffle migrate`

### Run DAPP

1. Change to the client folder: `cd client`
2. Install packages: `npm i`
3. Install Web3: `npm install -save web3`
4. Run the app: `npm start`

### Connect MetaMask with Ganache

1. Start Ganache and get RPC server URL.
2. Open MetaMask, select "Custom RPC", enter Ganache RPC details, and save.
3. Import accounts from Ganache to MetaMask.
