const HDWallet = require('@zedeid-sdk/zedeid-hdk-wallet');

function initWallet() {
    const mnemonic = HDWallet.generateMnemonic();
    console.log('mnemonic created: ', mnemonic);

    const wallet = new HDWallet.default(HDWallet.Types.MNEMONIC, mnemonic);
    console.log('wallet created');

    const childKeys = wallet.getChildKeys('m/0/1');
    console.log(childKeys)
}

function restoreWallet() {
    const mnemonic = 'wedding dawn hurry disorder picture until media slight lens whip right foot';
    const validMnemonic = HDWallet.validateMnemonic(mnemonic);

    if(validMnemonic){
        const wallet = new HDWallet.default(HDWallet.Types.MNEMONIC, mnemonic);
        console.log('wallet restored');

        const childKeys = wallet.getChildKeys('m/0/1');
        console.log(childKeys)
    }

}

restoreWallet();


