const array = [1,3,5,7,9];



const minMaxSum = (valores) => {
  const len = valores.length;
  const copy = [...valores];
  let sumArray = [];
  for (let i=0; i<len;i++){
    const copy = [...valores];
    copy.splice(i, 1);
    console.log(copy);
    sumArray.push(copy.reduce((a, b) => a + b));
    console.log(sumArray);
  }
  console.log(sumArray);
  console.log(`${Math.min(...sumArray)} ${Math.max(...sumArray)}`);
  }


minMaxSum(array);
