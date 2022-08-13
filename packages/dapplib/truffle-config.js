require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hero flame shadow shock note script around hidden private frame text'; 
let testAccounts = [
"0x4dc01fd3838ce894fb1cee5eac8e2fcd0a33835313ad9f9ae6b1c880b3fd0149",
"0x99aefedb63700ed0c3c82b74e4af56abefab2ca90787b85c767d09748c616dc1",
"0xb105cfb73753f005199f2025bf382d7188c1cac0b9fc3a1b6a9a111e8ec2f8e7",
"0xfc587df452157430b325fe0e0649278947d9cb6d1a6adcf6fed584e9b1c8e2a0",
"0xcba5013f72e0c41181c4aa6813eb43a30de247b03405b55b84836140bf44bbf6",
"0x8973d08b65f693f3e53c84ad12bf24ac05fb9e2425fe2345bbc85a15ec8b11b4",
"0x730db5a1ab94554e6b654cfe88334e4addf5cb41885b859e041492288d622855",
"0x8638f0757c5cffbe2cc3a4ddc393beefe9ece50f3f205a76d9dc7779a45eb338",
"0x256127443fe8b76b19072d0d6405f2a94f971d1da5824349a089e0fa0f5823de",
"0x73fbd3958698cc04f3ce9bb1c511b98f7cd9bee891f4ab2feca02209cc3e2595"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

