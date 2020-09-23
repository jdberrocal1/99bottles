import { capitalize, downTo } from './helpers';

export class Bottles {

  verse(numberOfBottles){
    // const bottles = downTo(numberOfBottle, 0);
    const lastBottle = numberOfBottles === 1;
    const bottleWord = `bottle${lastBottle ? '' : 's'}`;
    const nextBottle =  numberOfBottles - 1;
    const noBottles = numberOfBottles === 0;

    return `${noBottles ? 'No more' : numberOfBottles} ${bottleWord} of beer on the wall, ${noBottles ? 'no more' : numberOfBottles} ${bottleWord} of beer.\n` +
    `${noBottles ? 'Go to the store and buy some more,' : `Take ${lastBottle ? 'it' : 'one'} down and pass it around,`} ${lastBottle ? 'no more' : noBottles ? '99' : nextBottle} bottle${nextBottle === 1 ? '' : 's'} of beer on the wall.\n`;
  }

  verses(start, next) {
    return downTo(start, next).map(n => this.verse(n)).join('\n');
  }

  song() {
    return this.verses(99, 0);
  }

}
