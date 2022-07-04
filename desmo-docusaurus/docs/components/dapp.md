---
sidebar_position: 3
---
# Oracle DApp
![DESMO-LD](../imgs/desmo-logo.png)


Desmo-LD will leverage on iExec distributed cloud computing features to deploy its off-chain Oracle components. The Oracle DApp is an IExec decentralized application written in node-js which acts as the backend of Desmo-LD iExecDOracle. In particular, it is in charge of parsing and translating the on-chain oracle requests, collecting the results from the selected TDDs, reaching a consensus on the Web Thing response, and returning the response.  Thanks to iExec secure environment facilities, enabled Web Things can be operated within a secure enclave where credentials can be shared without any risk of information leaking.


![DESMO-LD](../imgs/dapp_FlowChart.jpg)
