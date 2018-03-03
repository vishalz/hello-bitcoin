

const blockFactory = require('./block.js');
let spec = {} ;
spec.timeStamp = 'foo';
spec.lastHash = 'bar';
spec.hash = 'zoo';
spec.data = 'baz';

block = blockFactory(spec);
console.log (block.toString());


block.makeGenesis();
console.log (block.toString());
