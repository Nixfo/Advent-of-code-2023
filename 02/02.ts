import { forEachLineOfFile } from "../util";

partA();
partB();

function partA(): void {
    const maxRed = 12;
    const maxGreen = 13;
    const maxBlue = 14;
    
    let sumOfPossibleIds = 0;
    let lineNumber = 1;
    forEachLineOfFile('02/input.txt', (line: string) => {
        const sets = line.split(': ')[1];
        
        let possibleFlag = true;

        const cubes = sets.split(';').flatMap((set) => set.split(','));
        for(let i = 0; i < cubes.length && possibleFlag; i++) {
            const numberAndColor = cubes[i].trimStart().split(' ');

            switch (numberAndColor[1]) {
                case 'red':
                    if (+numberAndColor[0] > maxRed) {
                        possibleFlag = false;
                    }
                    break;
                case 'green':
                    if (+numberAndColor[0] > maxGreen) {
                        possibleFlag = false;
                    }
                    break;
                case 'blue':
                    if (+numberAndColor[0] > maxBlue) {
                        possibleFlag = false;
                    }
                    break;
            }
        }
                            
        if (possibleFlag) {
            sumOfPossibleIds += lineNumber;
        }
        lineNumber++;
    });

    console.log('sum of possible IDs: ', sumOfPossibleIds);
}

function partB(): void {
    let sumOfPowers = 0;

    forEachLineOfFile('02/input.txt', (line: string) => {
        let maxRed = 0;
        let maxGreen = 0;
        let maxBlue = 0;

        const sets = line.split(': ')[1];

        sets.split(';').flatMap((set) => set.split(',')).forEach((cube) => {
            const numberAndColor = cube.trimStart().split(' ');

            switch (numberAndColor[1]) {
                case 'red':
                    if (+numberAndColor[0] > maxRed) {
                        maxRed = +numberAndColor[0];
                    }
                    break;
                case 'green':
                    if (+numberAndColor[0] > maxGreen) {
                        maxGreen = +numberAndColor[0];
                    }
                    break;
                case 'blue':
                    if (+numberAndColor[0] > maxBlue) {
                        maxBlue = +numberAndColor[0];
                    }
                    break;
            }
        });
        sumOfPowers += maxRed * maxGreen * maxBlue;
    });

    console.log('sum of powers: ', sumOfPowers);
}
