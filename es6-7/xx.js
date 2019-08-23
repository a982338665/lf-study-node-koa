

var sleep = function(time) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(`the program stopped ${time}ms`);
        }, time);
    });
}

var start = async function() {
    console.log("start");
    var sleeptime = await sleep(3000);
    console.log(sleeptime);
    console.log("end");
}

// start(3000);

var sleep2 = function(time) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            reject("error accured!");
        }, time);
    });
}

var start2 = async function() {
    try {
        console.log("start");
        var sleeptime = await sleep2(3000);
        console.log(sleeptime);
        console.log("end");
    } catch (e) {
        console.log(e);
    }
}

// start2(3000);


/*async函数的上下文 */
var asyncForFunc = async function(time) {
    for (var i = 0; i < 10; i++) {
        console.log(`当前开始的是是第${i+1}次循环`);
        var time2 = await sleep(time);
        console.log(`当前是第${i+1}次输出:${time2}`);
    }
}

asyncForFunc(1000);