import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boardSort'
})
export class BoardSortPipe implements PipeTransform {

  transform(images:Array<string>, boardSize: number, ...args: unknown[]): unknown {
    const imgs = [ ...images ];
    const pairs = ( boardSize * boardSize ) / 2;

    this.shuffleArray(imgs);
    const selected = imgs.slice(0, pairs);
    
    const transformedArray = selected.map((img, imgid) => {
      return {  imgid, img  }
    })

    transformedArray.push(...transformedArray);
    this.shuffleArray(transformedArray);

    const extraData = transformedArray.map((item, id) => {
      return { id, flipped: true, ...item  }
    })
    return this.listToMatrix(extraData, boardSize);
  }

  shuffleArray = (array: Array<any>) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  listToMatrix = (list, elementsPerSubArray) => {
    var matrix = [], i, k;
    for (i = 0, k = -1; i < list.length; i++) {
        if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
        }
        matrix[k].push(list[i]);
    }
    return matrix;
}

}
