

function isBalanced(s) {
    const b = s.split("");
        const openers = ["{", "[", "("];
        const closers = ["}", "]", ")"];
        for (let i = 0; i < b.length; i += 1) {
            if (i === b.length - 1 && !closers.includes(b[i])) {
                return "NO";
            }
            if (closers.includes(b[i])) {
                const index = closers.indexOf(b[i]);
                if (b[i - 1] !== openers[index]) {
                    return "NO";
                } else {
                    // remove the 2 elements
                    b.splice(i - 1, 2);
                    // reset the pointer
                    i -= 2;
                }
            }
        }
        return "YES";
}