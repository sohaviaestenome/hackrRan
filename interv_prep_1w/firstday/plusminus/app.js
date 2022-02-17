const array = [1,-2,-3,-5,-8,5,7,0, 0];
let pos = 0;
let neg = 0;
let zer = 0;



function plusMinus(arr) {
  const len = arr.length;
  let pos = 0;
  let neg = 0;
  let zer = 0;
  arr.forEach(value => {
   let signal =  Math.sign(value);


    if (signal === 1) {
      pos +=1;
    } else if (signal === -1) {
      neg += 1;
    } else if ( signal === 0) {
      zer +=1;
    }
  });
  console.log(`${(pos/(len)).toFixed(6)}`);
  console.log(`${(neg / (len)).toFixed(6) }`);
  console.log(`${(zer / (len)).toFixed(6) }`);


}

plusMinus(array);
