/* 
 * 数组排序
 */

//冒泡排序 稳定排序
function bubbleSort(array) {
	let len = array.length, j, arr = array.slice();
	let tempExchangeVal;
	while (len > 0) {
		for (j = 0; j < len - 1; j++) {
			if (arr[j] > arr[j+1]) {
				// 交换两个值
				tempExchangeVal = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = tempExchangeVal;
			}
		}
		len--;
	}
	return arr;
}
//快速排序 不稳定 
function quickSort(array){
	let arr = array.slice();// 深拷贝一份原数组
	//如果数组<=1,则直接返回
	if(arr.length<=1){
		return arr;
	}
	//找基准，并把基准从原数组删除
	var pivot=arr.splice(0,1)[0];
	//定义左右数组
	var left=[];
	var right=[];
	//比基准小的放在left，比基准大的放在right
	for(var i=0;i<arr.length;i++){
		if(arr[i]<=pivot){
			left.push(arr[i]);
		}
		else{
			right.push(arr[i]);
		}
	}
	
	//递归
	return quickSort(left).concat([pivot],quickSort(right));
}

//选择排序
function selectionSort(array) {
	let arr = array.slice(), // 深拷贝一份原数组
		len = arr.length,
		minIndex,
		temp;
	for (var i = 0; i < len - 1; i++) {
		minIndex = i;
		for (var j = i + 1; j < len; j++) {
			if (arr[j] < arr[minIndex]) {     //寻找最小的数
				minIndex = j;                 //将最小数的索引保存
			}
		}
		temp = arr[i];
		arr[i] = arr[minIndex];
		arr[minIndex] = temp;
	}
	return arr;
}

//