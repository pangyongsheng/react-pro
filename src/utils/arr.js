/*  
数组去重
依次对比第n个数是否在后面出现过
 */
function removeDuplicatedItem1(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}
/*借助indexOf()方法判断此元素在该数组中首次出现的位置下标与循环的下标是否相等*/
function removeDuplicatedItem2(arr){
	for(let i=0 ; i<arr.length;i++){
		if(arr.indexOf(arr[i]) != i){
			arr.splice(i,1);
			i--;
		}
	}
	return arr;
}

/*在filter中使用indexOf()方法判断此元素在该数组中首次出现的位置下标与循环的下标是否相等*/
function removeDuplicatedItem3(arr){
	return arr.filter((v,i,a)=>{
		return a.indexOf(v) === i;
	})
}

/* 使用Set */
function uniqueArray(arr) {
	return Array.from(new Set(arr))
}


/* 
 * 数组扁平化
 * 数组扁平化是指将一个多维数组变为一维数组
 */
//reduce遍历
function flatten1(arr) {  
    return arr.reduce((result, item)=> {
        return result.concat(Array.isArray(item) ? flatten(item) : item);
    }, []);
}

//递归
function flatten2(arr) {
    var res = [];
    arr.map(item => {
        if(Array.isArray(item)) {
            res = res.concat(flatten(item));
        } else {
            res.push(item);
        }
    });
    return res;
}
//扩展运算符
function flatten3(arr){
    while(arr.some(item=>Array.isArray(item))){
        arr = [].concat(...arr);
    }
    return arr;
}
