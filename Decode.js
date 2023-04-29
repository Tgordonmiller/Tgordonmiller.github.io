class HelloWorld {
  getInfo() {
    return {
      id: 'helloworld',
      name: 'It works!',
      blocks: [
        {
          opcode: 'hello',
          blockType: Scratch.BlockType.Hat,
          text: 'Hello!'
        }
      ]
    };
  }

  hello() {
    ;
  }
}

Scratch.extensions.register(new HelloWorld());
