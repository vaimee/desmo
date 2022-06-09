---
sidebar_position: 1
---
# iExec DApp

Typescript service based on *iexec-sdk* in order to comunicate with the in-chain side and *node-wot* to the off-chain comunication.

Core technologies: [iexec-sdk](https://github.com/iExecBlockchainComputing/iexec-sdk) and [node-wot](https://github.com/eclipse/thingweb.node-wot)

<!-- 
[Consensus Algorithm explanation](algorithm)

[Encoding explanation](encoding)

[UML](uml) 
-->

**Github Repository**
[iExec DApp](https://github.com/vaimee/desmo-dapp/tree/main/DApp)

# Command

```npm install -g ts-node typescript '@types/node'```

Run all test

```npm test```

Run tests

1. Consensus for nubmer ```ts-node tests/runTests.ts number```
2. Consensus for string ```ts-node tests/runTests.ts str```
3. Consensus for boolean ```ts-node tests/runTests.ts bool```
4. Encoding ```ts-node tests/runTests.ts encoding```
5. RealExample ```ts-node tests/runTests.ts usecase```
6. Query parser ```ts-node tests/runTests.ts parser```
6. Directory collector ```ts-node tests/runTests.ts wot```


# IexecSimpleApp

[Official guide](https://docs.iex.ec/for-developers/your-first-app)

# Steps

1.  scripts\build.bat
2.  scripts\runLocally.bat
3.  scripts\dockerPush.bat "docker-usernamed"
4.  copy chacksum from docker to iexec.json
5.  scripts\onChainDeploy.bat
6.  scripts\runOnChain.bat
7.  scripts\getResults.bat "task-id"

8.  iexec app publish --chain viviani
9.  iexec orderbook app 0x0ad0edfDbc3946215FeA6D5231c6F8EE3f150f27
10. iexec app run --args "arg1 arg2" --watch --chain viviani

8.  iexec order sign --app && iexec order publish --app

iexec app run --watch --chain viviani --trust 0 --callback 0x5e79D4ddc6a6F5D80816ABA102767a15E6685b3e