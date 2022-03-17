function processData(input) {
    //Enter your code here
        input = input.split('\n')
    let string = '';
    const undoList = [];
    
for (let i = 1; i < input.length; i++) {
        // do undoable storage before each ops

        //1 append
        if (input[i][0] == 1) {
            undoList.push(string)
            const strParse = input[i].split(' ')[1]
            string += strParse;
        }
        
        //2 delete
        if (input[i][0] == 2 ) {
            let tada = input[i]
            const deleteIndex = Number(tada.split(' ')[1])
            undoList.push(string)
            const len = string.length
            string = string.slice(0, len-(deleteIndex));
        }
        
        //3 print
        if (input[i][0] == 3 ) {
            let tada = input[i]
            const indexed = Number(tada.split(' ')[1])
            console.log(string[indexed-1])
        }
        
        //undo
        if (input[i][0] == 4) {
            string = undoList.pop()
        }

    }
} 