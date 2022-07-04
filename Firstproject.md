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

### Questions: 
#### Do we need contract name same with file name?
https://blog.csdn.net/beiniao520/article/details/79582983
#### SPDX license identifier not provided in source file. Before publishing, consider adding a comment containing "SPDX-License-Identifier: <SPDX-License>" to each source file. Use "SPDX-License-Identifier: UNLICENSED" for non-open-source code. Please see https://spdx.org for more information.
https://forum.openzeppelin.com/t/solidity-0-6-8-introduces-spdx-license-identifiers/2859
