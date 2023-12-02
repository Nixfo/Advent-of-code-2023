import * as fs from 'fs';

export function forEachLineOfFile(filename: string, callback: (line: string) => void) {
    const allFileContents = fs.readFileSync(filename, 'utf8');

    allFileContents.split(/\r?\n/).forEach((line) => {
        if (!line) {
            return;
        }

        callback(line);
    });
}