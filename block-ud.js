
class Block {
	constructor(timestamp,lastHash, hash,data ){
		this.timestamp = timestamp;
		this.lastHash = lastHash;
		this.hash = hash;
		this.data = data;
	}

	toString(){
	return `Block - 
		Timestamp : ${this.timeStamp}
		Last Hash : ${this.lastHash.substring(0,10)}
		Hash 			: ${this.hash.substring(0,10)}
		data			: ${this.data}`;	
	}
	
	static genesis() {
		return new this('Geneis Time', '-----', 'flr57-h45',[]);
	}


}
module.exports = Block;
