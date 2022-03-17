function processData(input) {
    //Enter your code here
    let lines = input.split("\n");
    let count = +lines[0];
    let queue = [];
    for (let i = 1; i <= count; i++) {
        let args = lines[i].split(' ');
        let cmd = +args[0];
        let arg;
        switch (cmd) {
            case 1:
                arg = args[1];
                queue.push(arg);
                break;
            case 2:
                queue.shift();
                break;
            case 3:
                console.log(queue[0]);
                break;
        }
    }
} 