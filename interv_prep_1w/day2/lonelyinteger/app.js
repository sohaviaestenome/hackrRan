
const a = [0,0,1,2,1];

function lonelyinteger(a) {
    // Write your code here
    let testI;
    let finished =false;
    let repeated = false;
    const superNumber = [];
        const result = a.forEach ( el => {
            if (a.length ===1) {
                superNumber.push(a[0]);
            } else if ( a.length>1 && ! finished){
                testI = a.splice(0,1)[0];
                repeated = a.includes(testI);
                
                if(repeated && a.length===3){
                    a.map ((el,index) => {
                        if(el === testI){
                            a.splice(index,1);
                            return superNumber = a[0];
                        }
                    })
                }else if (repeated) {
                    a.map ((el,index) => {
                        if(el === testI){
                            a.splice(index,1);
                        }
                    })
                
                
            }else if (!repeated){
                    finished = true;
                    return superNumber.push(testI);
                }

            }

        });

        return superNumber[0];

    }



    console.log(lonelyinteger(a));