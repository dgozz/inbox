const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'lock chaos era mixture impulse favorite team solid bicycle reveal cigar cycle',
    'https://rinkeby.infura.io/v3/8978cbceb696478bac20e21de549df99'
);

const web3 = new Web3(provider);

const deploy = async() => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi there!'] })
        .send({ gas: 1000000, from: accounts[0] });

    console.log('Contract deployed to', result.options.adress);
};
deploy();