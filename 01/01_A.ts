import * as fs from 'fs';

let count = 0;

//TODO faire un truc qui prend en paramètre un nom de fichier et un callback pour traiter les lignes
//TODO la fonction se charge du reste (fs.readFile + readline avec)
const allFileContents = fs.readFileSync('01_input.txt', 'utf8');

allFileContents.split(/\n/).forEach((line) => {
    if (!line) {
        return;
    }
    count += readLineCalibration(line);
});

console.log('count: ', count);

function readLineCalibration(line: string): number {
    let first = -1;
    let last = -1;

    for (let i = 0; i < line.length; i++) {
        const charNumber = line.charCodeAt(i) - 48;
        if (charNumber >= 0 && charNumber <= 9) {
            if (first === -1) {
                first = charNumber;
            }
            last = charNumber;
        }
    }

    return first * 10 + last;
}