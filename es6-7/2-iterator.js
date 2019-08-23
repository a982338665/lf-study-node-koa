
//生成器函数：目的为了简化迭代器
function *makeIterator(arr) {
    for (let i = 0; i < arr.length ; i++) {
        yield arr[i]
    } 
}

const  it = makeIterator(['1','2','3']);
console.log(it.next());
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().done);