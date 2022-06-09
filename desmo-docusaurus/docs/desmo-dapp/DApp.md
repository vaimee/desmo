---
sidebar_position: 1
---
![DESMO-LD](../imgs/desmo-logo.png)

# DESMO-LD Oracle DApp

**Overview** 

Desmo-LD will leverage on iExec distributed cloud computing features to deploy its
off-chain Oracle components. The Oracle DApp is an IExec decentralized application
written in node-js (Typescript) which acts as the backend of Desmo-LD iExecDOracle. In
particular, it is in charge of parsing and translating the on-chain oracle requests,
collecting the results from the selected TDDs, reaching a consensus on the Web
Thing response, and returning the response. Thanks to iExec secure environment
facilities, enabled Web Things can be operated within a secure enclave where
credentials can be shared without any risk of information leaking.


**System Architecture**

![Architecture](../imgs/dapp_schema.jpg)

![FlowChart](../imgs/dapp_FlowChart.jpg)

[FlowChart link](https://miro.com/app/board/uXjVODIdhHI=/?invite_link_id=916009864260)

**Github Repository**
[Desmo-DApp](https://github.com/vaimee/desmo-dapp)

**Contents**
1. [WAM for TDs example management](example-tds/README.md)
2. [Linksmart Directory for Directories example](linksmart-directory/README.md)
3. [DApp](DApp/README.md)
    1. [Consensus algorithm for TDs result](DApp/docs/algorithm.md)
    2. [Econding result](DApp/docs/encoding.md)
    3. [UML](docs/uml.md)



# LOCAL TEST

**SETUP**

1. WAM
    1. `cd ./example-tds`
    2. `npm install`
    3. `npm run build`
    4. `npm start`
2. `cd ..`
3. Directory
    1. `cd ./linksmart-directory` 
    2. Download and install GO [go.dev](https://go.dev/dl/)
    3. `./downloadRepo.sh`
    5. `cd ./directoryManager` 
    6. `npm install` 
    7. `npm start` 
4. `cd ../../`
5. DApp
    1. `cd ./DApp` 
    2. `npm install -g ts-node typescript '@types/node'`

**RUN TEST**

1. WAM
    1. `cd ./example-tds`
    4. `npm start`
2. `cd ..`
3. Directory
    1. `cd ./linksmart-directory`
    4. `./buildAndRunMultiple.sh`
    7. `./setupMultiple.sh` 
4. `cd ../../`
5. DApp
    1. `cd ./DApp` 
    2. `ts-node tests/runTests.ts usecase`

