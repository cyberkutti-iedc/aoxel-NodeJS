
---

# AOX-Decoder

**AOX-Decoder** is a Node.js package for decoding AOX audio files into WAV format. AOX is a custom audio format used in specific applications, and this package allows you to convert AOX files into a more universally supported WAV format.

## Features

- Decodes AOX audio files into WAV.
- Simple and easy-to-use API.
- Ideal for applications and projects working with custom audio formats.

## Installation

You can install AOX-Decoder via npm:

```bash
npm install aox-decoder
```

## Usage

To decode AOX files, use the following code in your Node.js project:

```javascript
const aoxDecoder = require('aox-decoder');

const aoxFile = 'path/to/your.aox';
const outputDir = 'path/to/output/dir';

aoxDecoder.decodeAOX(aoxFile, outputDir)
  .then(() => {
    console.log('Decoding completed successfully.');
  })
  .catch((error) => {
    console.error('Error decoding AOX file:', error);
  });
```

## Documentation

For more details and examples, please refer to the [official documentation](link-to-documentation).

## License

This project is open-source and available under the [MIT License](LICENSE).

## Author

- **Author:** SREERAJ V RAJESH
- **GitHub:** [GitHub Profile](https://github.com/cyberkutti-iedc)

## Repository

The source code for this package can be found on [GitHub](https://github.com/cyberkutti-iedc/aoxel-NodeJs).

---
