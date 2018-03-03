//const Block = require ('./Block.js');
//const block = new Block('foo','bar','zoo','baz');
//console.log (block.toString());
//

const blockFactory = require('./blockDC.js');
let spec = {} ;
spec.timeStamp = 'foo';
spec.lastHash = 'bar';
spec.hash = 'zoo';
spec.data = 'baz';

block = blockFactory(spec);
console.log (block.toString());


block.makeGenesis();
console.log (block.toString());
