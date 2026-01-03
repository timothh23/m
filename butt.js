class Booty
{
  getInfo()
  { return
     {
       id: 'booty',
       name: 'Booty Code',
       blocks:
       [
         {
           opcode: 'stinknumber',
           blockType: Scratch.BlockType.REPORTER,
           text: 'Stink number'
         }
       ]
     };
    
  }
  stinknumber()
  {
    return 'no';
  }
  
}
Scratch.extensions.register(new Booty());
