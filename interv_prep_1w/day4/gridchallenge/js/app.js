function gridChallenge(grid){

let sortedGrid = grid.map(item => {
    let temp = item.split("").sort()
    return temp;
})
console.log(sortedGrid)
let columnSorted = []
for(let i = 0; i<sortedGrid[0].length; i++){
    let temp = "";
    for(let j = 0; j<sortedGrid.length; j++){
        console.log(sortedGrid[j])
        temp += sortedGrid[j][i];
    }
    columnSorted.push(temp)
}
console.log(columnSorted);
let filteredColumn = columnSorted.filter(item => {
    let t = item.split("").sort().join("")
    console.log(t," : ",item)
    return item === t;
})
return filteredColumn.length === columnSorted.length?"YES":"NO";

}

gridChallenge(["eabcd","olkmn","trpqs","xywuv"]);