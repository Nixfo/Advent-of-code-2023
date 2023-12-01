import * as fs from 'fs';

let count = 0;

//TODO faire un truc qui prend en paramètre un nom de fichier et un callback pour traiter les lignes
//TODO la fonction se charge du reste (fs.readFile + readline avec)
const allFileContents = fs.readFileSync('12_01_A_input.txt', 'utf8');
// const allFileContents = fs.readFileSync('input.txt', 'utf8');

allFileContents.split(/\n/).forEach((line) => {
    if (!line) {
        return;
    }

    const realLine = transformLetterIntoNumber(line);
    console.log('realLine', realLine);
    count += readLineCalibration(realLine);
});

console.log('count: ', count);

function transformLetterIntoNumber(line: string): string {
    console.log('received line', line);
    
    return line
        .replace(/one/g, 'o1e')
        .replace(/two/g, 't2o')
        .replace(/three/g, 't3e')
        .replace(/four/g, 'f4r')
        .replace(/five/g, 'f5e')
        .replace(/six/g, 's6x')
        .replace(/seven/g, 's7n')
        .replace(/eight/g, 'e8t')
        .replace(/nine/g, 'n9e');
}

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
    console.log('returning', first*10+last);
    return first * 10 + last;
}