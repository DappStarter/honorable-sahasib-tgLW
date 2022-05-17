require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half kiwi orange tooth bike curtain net purpose gesture drink fresh spoon'; 
let testAccounts = [
"0xe73c140df90ea90dd7e16e1f1d62be7f6ba9b5ea8771708ea5d92bea5fb49b91",
"0x6a1675429ec062832d0bf6345c338c02efa6e8cfcb75f589c125f7edf79fa295",
"0x417995ec3ea939be2358a462ec558769011c50806fc1ce52e8cec6a4b448bbf6",
"0xb010997e4ad0e5140c19138397a4eb179a95a294edeed528be800eb7676d69f5",
"0xa17a862517d9196abba9638e25d760f85d1fb6608e5886cdfafc68b7954ce518",
"0x0314014061829e340dfe609ff231fd13b5d8314309c06b8448b58d3db918bf91",
"0x816fc95af127efa5c78f1c57d4c790a90c305113c3329dcad238cf8710cfd569",
"0x2370a8b21b9b4755071dc8d2cc952e6e00922134d78c92b090a2cffff3920c69",
"0x04a1dc61a843934a54f46cba3295a12aa98b3f3aec78edc3954b8030b7d2af13",
"0x833eb3743c113463efa02e819609cd79872dfadcc5eed3026a8cd7e6c5d7b01a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

