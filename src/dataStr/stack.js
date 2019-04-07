/*
栈，一种具有特殊行为的数组，具有后进先出（LIFO）原则的有序集合。
（数组头部）栈底[]栈顶（数组尾部）
push(element(s)) ：添加一个（或几个）新元素到栈顶。
pop() ：移除栈顶的元素，同时返回被移除的元素。
peek() ：返回栈顶的元素，不对栈做任何修改（这个方法不会移除栈顶的元素，仅仅返回它）。
isEmpty() ：如果栈里没有任何元素就返回 true ，否则返回 false 。
clear() ：移除栈里的所有元素。
size() ：返回栈里的元素个数。这个方法和数组的 length 属性很类似。

 */

 function Stack(arr) {
	// 使用数组来模拟栈
	let items =[] 
	
	// push方法
	this.push = function(element){
		items.push(element);
	};
	
	// pop方法
	this.pop = function(){
		return items.pop();
	};
	
	// peek方法
	this.peek = function(){
		return items[items.length-1];
		// return items.slice().pop();
	};
	
	// isEmpty方法
	this.isEmpty = function(){
		return items.length === 0;
	};	
	
	// size方法
	this.size = function(){
		return items.length;
	};
	
	// clear方法
	this.clear = function(){
		items = [];
	};
	
	// print调试方法
	this.print = function(){
		console.log(items.toString());
	};
}