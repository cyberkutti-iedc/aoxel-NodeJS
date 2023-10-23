const decodeAOX = require('../src/index'); 

const aoxFilename = './input.aox'; // Replace with the path to your AOX file
const outputDir = './'; // Output directory for decoded WAV files

decodeAOX(aoxFilename, outputDir);
