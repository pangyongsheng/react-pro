/*依次对比第n个数是否在后面出现过*/
removeDuplicatedItem1(arr) {
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
removeDuplicatedItem2(arr){
	for(let i=0 ; i<arr.length;i++){
		if(arr.indexOf(arr[i]) != i){
			arr.splice(i,1);
			i--;
		}
	}
	return arr;
}

/**/
removeDuplicatedItem3(arr){
	return arr.filter((v,i,a)=>{
		return a.indexOf(v) === i;
	})
}