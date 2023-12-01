import { forEachLineOfFile } from '../util';

partA();
partB();

function partA() {
    let count = 0;

    forEachLineOfFile('01/01_input.txt', (line: string) => {
        count += readLineCalibration(line);
    });
    
    console.log('count: ', count);
}

function partB() {
    let count = 0;

    forEachLineOfFile('01/01_input.txt', (line: string) => {
        const realLine = transformLetterIntoNumber(line);
        count += readLineCalibration(realLine);
    });

    console.log('count: ', count);
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

    return first * 10 + last;
}

function transformLetterIntoNumber(line: string): string {
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
