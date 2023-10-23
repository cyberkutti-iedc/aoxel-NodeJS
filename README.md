```markdown
# aox-decoder

A Node.js package for decoding AOX files into WAV files.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation

You can install the package via npm:

```bash
npm install aox-decoder
```

## Usage

To use the `aox-decoder` package, you need to require it in your Node.js code:

```javascript
const aoxDecoder = require('aox-decoder');
```

### Decoding AOX Files

Use the `decodeAOX` function to decode AOX files into WAV files. Provide the path to the AOX file and the output directory as arguments.

```javascript
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

## API Documentation

### `decodeAOX(aoxFile, outputDir)`

- `aoxFile` (String): The path to the AOX file to be decoded.
- `outputDir` (String): The directory where decoded WAV files will be saved.

Decodes the AOX file into WAV files in the specified output directory.

## Contributing

Contributions are welcome! To contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure they are properly tested.
4. Submit a pull request to the `main` branch of this repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or need further assistance, feel free to contact the project author:

- **Name:** SREERAJ V RAJESH
- **GitHub:** [GitHub Profile](https://github.com/cyberkutti-iedc)
- **Email:** cyberkutti@example.com

---

Thank you for using `aox-decoder`! We hope it's helpful in your project.
```

