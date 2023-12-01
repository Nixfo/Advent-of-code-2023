import * from 'fs';

export function forEachLineOfFile(filename: string, callback: (line: string) => void) {
    const allFileContents = fs.readFileSync(filename, 'utf8');

    allFileContents.split(/\n/).forEach((line) => {
        if (!line) {
            return;
        }

        callback(line);
    });
}