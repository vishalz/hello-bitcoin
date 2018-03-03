let blockFactory = function(spec){

//block object 
let block = {};

// private variables
let timeStamp = undefined;
let lastHash  = undefined;
let hash      = undefined;
let data 			= undefined;




//private functions 
var toString = function toString(){
	return `Block - 
  Time Stamp : ${timeStamp}
  Last Hash  : ${lastHash}
  Hash       : ${hash}
  Data       : ${data}`;
}

var makeGenesis = function makeGenesis(){
	timeStamp = "Genesis Time";
	lastHash  = "------";
	hash      = "flr57-h45h";
  data      = [];
}

//make genesis block if lastHash is null
if (typeof(spec) === 'object' && 'lastHash' in spec){
	timeStamp = spec.timeStamp;
	lastHash  = spec.lastHash;
	hash      = spec.hash;
	data 			= spec.data;
	
}else {

	makeGenesis();


}


//public methods

block.toString = toString;
block.makeGenesis =  makeGenesis; 

//return block object 
return block;

}

module.exports = blockFactory;

