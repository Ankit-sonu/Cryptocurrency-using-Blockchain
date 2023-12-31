const ChainUtil = require('../chain-util');
const { INITIAL_BALANCE } = require('../config');

class Wallet {
    constructor() {
        this.balance = INITIAL_BALANCE;
        this.keyPair = ChainUtil.genKeyPair();
        this.publickey = this.keyPair.getPublic().encode('hex');
     }

     toString() {
        return `Wallet -
        publicKey: ${this.publickey.toString()}
        balance  : ${this.balance}`
     }

     sign(dataHash) {
        return this.keyPair.sign(dataHash);
    }
}

module.exports = Wallet; 