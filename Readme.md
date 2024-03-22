NodeDex-Sim
NodeDex-Sim is a Node.js-based simulation of a decentralized exchange (DEX). It is designed to provide users with a hands-on experience of the core functionalities of a DEX, including order management, matching, and trading logic. This simulation is an ideal tool for anyone looking to learn the fundamentals of how a decentralized exchange operates in a controlled and simplified environment.

Features
Buy and sell asset endpoints
Real-time balance updates
Simple trading logic
Installation
To get started with NodeDex-Sim, you need to have Node.js installed on your machine. Once you have Node.js installed, follow these steps:

Clone the repository:
git clone https://github.com/sunilsimar/NodeDEX-Sim.git
Navigate to the project directory:
cd NodeDex-Sim
Install the required dependencies:
npm install
Build - npm run build
Start the server - npm run start
The server will start running on http://localhost:3000.

Usage
NodeDex-Sim provides two main endpoints for simulating asset trading: /buy-asset and /sell-asset.

Buy Asset
To buy an asset, send a POST request to /buy-asset with the following JSON body:

{
  "quantity": 10
}
The server will respond with a message indicating how much USDC you paid for the specified quantity of ETH.

Sell Asset
To sell an asset, send a POST request to /sell-asset with the following JSON body:

{
  "quantity": 5
}
The server will respond with a message indicating how much USDC you got for the specified quantity of ETH.

Disclaimer
NodeDex-Sim is a simulation tool intended for educational purposes only. It does not connect to any real blockchain or cryptocurrency network and should not be used for actual trading.

Contribution
Contributions are welcome! If you have any suggestions or improvements, feel free to fork the repository and submit a pull request.

License
NodeDex-Sim is open-source and is licensed under the MIT License.