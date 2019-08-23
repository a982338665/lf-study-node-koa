

// let xxx =[12,22,12,22,34];
//
// xxx.remove(34);
// xxx.remove('22');
//
// // console.log('22');
//
// console.log(xxx);
function removeElement(arr, ele){
    var result  = [];
    if(arr instanceof Array){
        if(ele instanceof Array){
            result = arr.filter(function(item){
                var isInEle = ele.some(function(eleItem){
                    return item === eleItem;
                });
                return !isInEle
            })
        }else{
            result = arr.filter(function(item){
                return item !== ele
            })
        }
    }else{
        console.log('parameter error of function removeElement');
    }
    return result;
}

var resoults= removeElement(['1','2'],['2',5]);
console.log(resoults);