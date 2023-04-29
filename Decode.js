class DecodeScratch {
  getInfo() {
    return {
      id: 'decode',
      name: 'Decode',
      blocks: [
        {
          opcode: 'Decode',
          blockType: Scratch.BlockType.REPORTER	,
          text: 'Decode',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.MATRIX
            }
          }
        }
      ]
    };
  }

  Decode(args) {
    return args.ONE;
  }
}
Scratch.extensions.register(new DecodeScratch());
