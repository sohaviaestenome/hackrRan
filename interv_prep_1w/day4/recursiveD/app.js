function superDigit(n, k) {
    // Write your code here
    let p = (n.split('').map(Number).reduce((a,b) => a+b, 0)*k).toString()
    return p.length > 1 ? superDigit(p, 1) : p
}

console.log(superDigit("0",1));