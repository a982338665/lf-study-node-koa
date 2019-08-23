
const co = require('co');
const fs = require('fs');
const fetch = require('node-fetch');

// co(function *() {
//     const res = yield fetch('http://v.baidu.com/movie/137294.htm?frp=browse');
//
//     console.log(res);
//     const movie = yield res.json();
//     const summary =movie.summary
//     console.log(summary);
// });

// let xx= "18";
// let pp =20;
// console.log(pp-xx);
let bool = true;
for (let i = 0; i < 10 ; i++) {
    if (bool){
        fs.readFile('../package.json',(err,data) => {
            console.log("_______"+i);
            if(i == 9){
                console.log(2);
            }
        });
    }
}
