const SHA256 = require(crypto-js/sha256);

class Block {
  constructor(index, data, previusHash = ''){
    this.index = index;
    this.date = new Date();
    this.data = data;
    this.previusHash = previusHash;
    this.hash = this.createHash();
  }

  createHash(){
    return SHA256(this.index + this.date + this.date);
  }
}

block = new Block(0, 'Prueba');
console.log(JSON.stringify(block, null,2));