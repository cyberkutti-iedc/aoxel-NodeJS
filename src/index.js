const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const mkdir = promisify(fs.mkdir);

async function decodeAOX(aoxFilename, outputDir) {
    try {
        const aoxFile = await readFile(aoxFilename);
        const header = aoxFile.slice(0, 3).toString();

        if (header !== 'aox') {
            console.log('Invalid AOX file format.');
            return;
        }

        let offset = 3;
        const numWavFiles = aoxFile.readUInt32LE(offset);
        offset += 4;

        const metadataLength = aoxFile.readUInt32LE(offset);
        offset += 4;
        const metadata = aoxFile.slice(offset, offset + metadataLength).toString('utf-8');
        console.log(`Metadata: ${metadata}`);
        offset += metadataLength;

        for (let i = 0; i < numWavFiles; i++) {
            const wavFilenameLength = aoxFile.readUInt32LE(offset);
            offset += 4;
            const wavFilename = aoxFile.slice(offset, offset + wavFilenameLength).toString('utf-8');
            offset += wavFilenameLength;

            const wavSize = aoxFile.readUInt32LE(offset);
            offset += 4;
            const wavData = aoxFile.slice(offset, offset + wavSize);
            offset += wavSize;

            const outputWavPath = path.join(outputDir, wavFilename);
            await mkdir(outputDir, { recursive: true });
            await writeFile(outputWavPath, wavData);

            console.log(`Decoded ${aoxFilename} to WAV file: ${outputWavPath}`);
        }

        console.log(`Decoded ${aoxFilename} to WAV files in ${outputDir}`);
    } catch (err) {
        console.error(err);
    }
}

module.exports = decodeAOX;
