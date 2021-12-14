const HDWallet = require('@zedeid-sdk/zedeid-hdk-wallet');

function initWallet() {
    const mnemonic = HDWallet.generateMnemonic();
    console.log('mnemonic created: ', mnemonic);

    const seed = HDWallet.getSeedFromMnemonic(mnemonic);
    console.log('seed for above mnemonic: ', seed);

    const wallet = new HDWallet.default(HDWallet.Types.MNEMONIC, mnemonic);
    console.log('wallet created');
    console.log('base58 wallet', wallet.getBase58());

    const childKeys = wallet.getChildKeys('m/0/1');
    console.log(childKeys)
}

function restoreWalletFromMnemonic() {
    //use a saved mnemonic to restore the same wallet
    const mnemonic = 'situate moon cinnamon suspect town soft outer mouse wonder west kit priority';
    //check if mnemonic is valid
    const validMnemonic = HDWallet.validateMnemonic(mnemonic);

    if(validMnemonic){
        const wallet = new HDWallet.default(HDWallet.Types.MNEMONIC, mnemonic);
        console.log('wallet restored - mnemonic');

        const childKeys = wallet.getChildKeys('m/0/1');
        console.log(childKeys)
    }
}

function restoreWalletFromSeed() {
    //use a saved seed to restore the same wallet
    const seed = '54ff276c9a9f0d6e7de11dc6cba404a3b865c9bc81fd56286f2415f90eb5ed352bb500b001e68cd28762682e294a97fb6a78248d5bde5762a57709885e88c1c8';

    const wallet = new HDWallet.default(HDWallet.Types.SEED, seed);
    console.log('wallet restored - seed');

    const childKeys = wallet.getChildKeys('m/0/1');
    console.log(childKeys)
}

function restoreWalletFromBase58() {
    //use a saved base58 key to restore the same wallet
    const base58 = 'xprv9s21ZrQH143K3aBr7cMVJmbVaLcRjTbaU5ohwme1AdY881zWAKvufczE1htn9cLCa4XhXYipzP125QookCm7xcWFrkviHgWANpaHrV2eL4V';

    const wallet = new HDWallet.default(HDWallet.Types.BASE58, base58);
    console.log('wallet restored - base58');

    const childKeys = wallet.getChildKeys('m/0/1');
    console.log(childKeys)
}

initWallet();
restoreWalletFromMnemonic();
restoreWalletFromSeed();
restoreWalletFromBase58();
