class codeer {
  getInfo() {
    return {
      id: 'codeer', // change this if you make an actual extension!
      name: 'codeer',
      blocks: [
        {
          opcode: 'strictlyEquals',
          blockType: Scratch.BlockType.COMMAND,
          text: 'set to [ONE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.MATRIX
              defaultValue: 'matrix'
            }
          }
        }
      ]
    };
  }
  strictlyEquals(args) {
    // Note strict equality: Inputs must match exactly: in type, case, etc.
    m = args.ONE
  }
}
Scratch.extensions.register(new codeer());
