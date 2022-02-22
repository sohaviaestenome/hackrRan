
const a = [1,0,1];

function lonelyinteger(a) {
    // Write your code here
  let n = a.length;

    const m = new Map();
    for (let i = 0; i < n; i++) {
        if (m.has(a[i])) {
            m.set(a[i], m.get(a[i]) + 1);
        }
        else {
            m.set(a[i], 1);
        }
    }
    // Traverse array again and return
    // first element with count 1.
    for (let i = 0; i < n; i++)
        if (m.get(a[i]) == 1)
            return a[i];
    return -1;
}
    console.log(lonelyinteger(a));





//     const result = a.forEach ( el => {
//         if (a.length ===1) {
//             superNumber.push(a[0]);
//         } else if ( a.length>1 && ! finished){
//             testI = a.splice(0,1)[0];
//             repeated = a.includes(testI);
            
//             if(repeated && a.length===3){
//                 a.map ((el,index) => {
//                     if(el === testI){
//                         a.splice(index,1);
//                         return superNumber = a[0];
//                     }
//                 })
//             }else if (repeated) {
//                 a.map ((el,index) => {
//                     if(el === testI){
//                         a.splice(index,1);
//                     }
//                 })
            
            
//         }else if (!repeated){
//                 finished = true;
//                 return superNumber.push(testI);
//             }

//         }

//     });

//     return superNumber[0];

// }
