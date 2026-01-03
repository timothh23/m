class Booty
{
  getInfo()
  { 
     return {
       id: 'booty',
       name: 'Booty Code',
       blocks:
       [
         {
           opcode: 'stinknumber',
           blockType: Scratch.BlockType.REPORTER,
           text: 'Stink number [NUMBER]'
           arguments:
           {
             NUMBER:
             {
                type: Scratch.ArgumentType.NUMBER,
                  defaultValue: 726.315
             }
           }
         }
       ]
     };
    
  }
  stinknumber(args)
  {
    return  (((agrs.NUMBER /363.1575) ^ 5) /29);
  }
  
}
Scratch.extensions.register(new Booty());
