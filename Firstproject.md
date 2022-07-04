### make directory
```sh
mkdir workspace
cd workspace
mkdir firstproject
```
### Create a bare Truffle project with no smart contracts included
```sh
cd firstproject
truffle init
```
### Open project in visual studio code
```sh
code .
```
### Config truffle-config.js
In Network entry:
```js
development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none) Point to the Ganache network
      network_id: "*",       // Any network (default: none)
     }
```
### Create a new smart contract in ./contract
### Do we need contract name same with file name?