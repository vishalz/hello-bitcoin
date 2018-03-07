const Block = require ('../lib/block.js');
describe('The Block',() =>{
  let data,lastBlock,block; 
  beforeEach(() => {
    data = 'bar';
    lastBlock = Block.genesis();
    block = Block.mineBlock(lastBlock,data);
  });  
  
  
  
  it('It Sets the `data` to match the input',() => {
    expect(block.data).toEqual(data);
  
  });
  it('It Sets the `lastHash` to match the hash of last block',() => {
    expect(block.lastHash).toEqual(lastBlock.hash);
  
  });

});
