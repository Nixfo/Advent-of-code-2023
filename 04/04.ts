import { forEachLineOfFile } from '../util';

partA();
partB();

function partA() {
    let totalScore = 0;

    forEachLineOfFile('04/input.txt', (line: string) => {
        const cards = line.split(': ')[1].split(' | ');
        const winningNumbers: string[] = cards[0].trim().split(/\s+/);
        const playerNumbers: string[] = cards[1].trim().split(/\s+/);

        const matchingNumeros = countMatchingNumeros(winningNumbers, playerNumbers);

        if (matchingNumeros > 0) {
            totalScore += 2 ** (matchingNumeros - 1);
        }
    });

    console.log('total score: ', totalScore);
}

function partB() {
    let scratchcardsNumber = 0;
    let copiesOfFollowingCards: number[] = [];

    forEachLineOfFile('04/input.txt', (line: string) => {
        const cards = line.split(': ')[1].split(' | ');
        const winningNumbers: string[] = cards[0].trim().split(/\s+/);
        const playerNumbers: string[] = cards[1].trim().split(/\s+/);

        const matchingNumeros = countMatchingNumeros(winningNumbers, playerNumbers);

        let numberOfCopy = 1;

        if (copiesOfFollowingCards.length > 0) {
            numberOfCopy += copiesOfFollowingCards.shift()!;
        }

        scratchcardsNumber += numberOfCopy;

        for (let i = 0; i < matchingNumeros; i++) {
            if (i < copiesOfFollowingCards.length) {
                copiesOfFollowingCards[i] += numberOfCopy;
            } else {
                copiesOfFollowingCards.push(numberOfCopy);
            }
        }
    });

    console.log('scratchcards number: ', scratchcardsNumber);
}

function countMatchingNumeros(winningNumbers: string[], numbers: string[]): number {
    return numbers.filter(n => winningNumbers.includes(n)).length;
}
