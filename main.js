const SHA256 = require("crypto-js/sha256");

class Block {
  constructor(index, data, previusHash = '') {
    this.index = index;
    this.date = new Date();
    this.data = data;
    this.previusHash = previusHash;
    this.hash = this.createHash();
  }

  createHash() {
    return SHA256(this.index + this.date + this.data);
  }
}

block = new Block(0, 'Prueba');
console.log(JSON.stringify(block, null, 2));

class blockchain {
  constructor(genesis) {
    this.chain = [this.createFirstBlock(genesis)];
  }
  createFirstBlock(genesis) {
    return new Block(0, genesis);
  }
  getLastBlock() {
    return this.chain[this.chain.length - 1];
  }
  addBlock(data) {
    let prevBlock = this.getLastBlock();
    let block = new Block(prevBlock.index + 1, data, prevBlock.hash);
    this.chain.push(block);
  }
}

// block = new Block(0, 'Este es el primer bloque de la cadena');
// console.log(JSON.stringify(block,null,2));

let naniCoin = new blockchain('info de genesis');
console.log(JSON.stringify(naniCoin.chain, null, 2));
naniCoin.addBlock('Este es el segundo bloque');
naniCoin.addBlock('Este es la información del tercero');
console.log(JSON.stringify(naniCoin.chain, null, 2));
