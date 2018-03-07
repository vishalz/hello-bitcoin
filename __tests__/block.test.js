const Block = require('../lib/block.js');

describe('Block Class data and methods',() =>{
  let block;

  beforeEach(() => {
    block = new Block('time','lastHas','hash','data');
  });
  
  it('should contain genesis static method', ()=>{
    expect(Block.genesis).toBeDefined();
  });
  
  it('should contain mineBlock static method', ()=>{
    expect(Block.mineBlock).toBeDefined();
  });

  it('should contain hash static method', ()=>{
    expect(Block.hash).toBeDefined();
  });

  it('should contain timestamp ', ()=>{
    expect(block.timestamp).toBeDefined();
  });

  it('should contain lastHash ', ()=>{
    expect(block.lastHash).toBeDefined();
  });

  it('should contain hash ', ()=>{
    expect(block.hash).toBeDefined();
  });

  it('should contain data ', ()=>{
    expect(block.data).toBeDefined();
  });





});

