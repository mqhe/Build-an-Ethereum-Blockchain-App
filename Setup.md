## Environment
- OS: ubuntu-18.04.6
## Ethereum client: geth
Geth website: https://geth.ethereum.org/docs/install-and-build/installing-geth
### Install an update
```sh
sudo add-apt-repository -y ppa:ethereum/ethereum
sudo apt-get update
sudo apt-get install ethereum
```
### Run light node:
```sh
geth --syncmode light
```
## Nodejs and npm
nvm github: https://github.com/nvm-sh/nvm/blob/master/README.md
### Install nvm
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
source ~/.bashrc
```
### Install nodejs 12
```sh
nvm install 12
```
### Note
1. Installed nodejs 16 at first and met error when installing truffle. Change nodejs version to 12.

## Local blockchain: Ganache
- Ganache UI: https://trufflesuite.com/ganache/
- Ganache cli github: https://github.com/trufflesuite/ganache/tree/master
```sh
npm install ganache --location=global
ganache
```

## Truffle
```sh
npm install -g truffle
```
## Ethereum wallet
Metamask: metamask.io

## Visual studio code
https://code.visualstudio.com/
