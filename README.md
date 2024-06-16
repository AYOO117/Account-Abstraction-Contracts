# Smart Contract Wallet (SCW) Project
![smartmockups_lxgix0po](https://github.com/AYOO117/AccountAbstraction/assets/97744998/b8c4eb11-7648-4c6c-b493-50f447b7bdfb)

website link-https://account-abstraction-xi.vercel.app/

This repository contains the smart contracts for the Smart Contract Wallet (SCW) project, a multi-signature wallet leveraging account abstraction on Ethereum. The SCW allows multiple signers to control a single wallet, enhancing security and flexibility.


## Smart Contracts
- Wallet.sol
The main smart contract for the multi-signature wallet. This contract allows multiple signers to manage a single wallet and execute transactions.

- WalletFactory.sol
A factory contract to deploy new instances of the Wallet contract. This contract also computes the counterfactual address of the wallet before deployment.

## Installation and Setup with Foundry

- Install Foundry: curl -L https://foundry.paradigm.xyz | bash
foundryup
- git clone https://github.com/yourusername/scw-contracts.git
cd scw-contracts/contracts
- npm install
- forge build
- forge script scripts/Deploy.s.sol --rpc-url <SEPOLIA_RPC_URL> --private-key <YOUR_PRIVATE_KEY> --broadcast
- forge test

This project is licensed under the GPL-3.0 License
