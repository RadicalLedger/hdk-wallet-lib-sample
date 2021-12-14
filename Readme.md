#hdk-wallet-lib-sample

Simplest usage of @zedeid-sdk/zedeid-hdk-wallet

## How to run
`npm install` <br>
`npm start`

## How it works?
* Init a wallet by generating a mnemonic
* Use Wallet.getChildKeys("_path_") to generate child keys
* path should be in the form of `m/index_parent/index_child`
* `ex: m/2/1/4`

* Save above generated mnemonic to restore the same wallet
