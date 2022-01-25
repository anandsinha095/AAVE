
# Aave Fork Protocol v2

This repository contains the smart contracts source code and markets configuration for Aave Protocol V2. The repository uses Docker Compose and Hardhat as development enviroment for compilation, testing and deployment tasks.


## Installation

You can install `@aave/protocol-v2` as an NPM package in your Hardhat, Buidler or Truffle project to import the contracts and interfaces:
```bash
npm install @aave/protocol-v2
```
Install all dependencies 

```bash
npm install
```


## Setup

The repository uses Docker Compose to manage sensitive keys and load the configuration. Prior any action like test or deploy, you must run `docker-compose up` to start the `contracts-env` container, and then connect to the container console via `docker-compose exec contracts-env bash`.

Follow the next steps to setup the repository:

- Install `docker` and `docker-compose`
- Need to replace these parameters in .env file

```
# Mnemonic, only first address will be used
MNEMONIC=""

# Add Alchemy or Infura provider keys, alchemy takes preference at the config level
ALCHEMY_KEY=""
INFURA_KEY=""

```


## Test

You can run the full test suite with the following commands:

```
npx hardhat compile

npx hardhat test 
```

## Deployment on dev env

For deploying Aave Protocol V2, you can use the available scripts located at `package.json`. For a complete list, run `npm run` to see all the tasks.

```
npx hardhat aave:dev   

```

### Kovan deployment

```
# In one terminal
docker-compose up

# Open another tab or terminal
docker-compose exec contracts-env bash

# A new Bash terminal is prompted, connected to the container
npm run aave:kovan:full:migration
```

### Live ETH/USD price 

for getting the live price from chainlink 

```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract PriceConsumerV3 {

    AggregatorV3Interface internal priceFeed;

    /**
     * Network: Rinkeby
     * Aggregator: ETH/USD
     * Address: 0x615fBe6372676474d9e6933d310469c9b68e9726
     */
    constructor() {
        priceFeed = AggregatorV3Interface(0x615fBe6372676474d9e6933d310469c9b68e9726);
    }

    /**
     * Returns the latest price
     */
    function getLatestPrice() public view returns (int) {
        (
            uint80 roundID, 
            int price,
            uint startedAt,
            uint timeStamp,
            uint80 answeredInRound
        ) = priceFeed.latestRoundData();
        return price;
    }
}
```