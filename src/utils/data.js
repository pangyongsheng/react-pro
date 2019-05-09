/*
 * 数据结构 
 */

//栈 一种具有特殊行为的数组，具有后进先出（LIFO）原则的有序集合。
function Stack() {
	// 使用数组来模拟栈
	let items = [];
	
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

//队列 遵循FIFO（First In First Out，先进先出，也称为先来先服务）原则的一组有序的项。
function Queue() {
	
	// 保存数据
	let items = [];
	
	// enqueue方法 向队列尾部添加一个（或多个）新的项
	this.enqueue = function(element){
		items.push(element);
	};
	// dequeue 方法 移除队列的第一（即排在队列最前面的）项，并返回被移除的元素
	this.dequeue = function(){
		return items.shift();
	};
	// front 方法
	this.front = function(){
		return items[0];
	};
	// isEmpty 方法
	this.isEmpty = function(){
		return items.length === 0;
	};
	
	// size方法
	this.size = function(){
		return items.length;
	};
	
	// print 调试方法
	this.print = function(){
		console.log(items.toString());
	};
}

//列表
function LinkedList() {
	
	// 表示要加入列表的项
	let Node = function(element){ // {1}
		this.element = element; // 填加到列表的值
		this.next = null; // 列表中下一个节点项的引用
	};
	
	let length = 0; // {2}
	
	// 用于存在第一个节点的引用
	let head = null; 
	
	// 取得链表首元素
	this.getHead = function(){
		return head;
	};
	
	// 向列表尾部添加一个新的项
	this.append = function(element){
		let node = new Node(element);
		current;
		
		if (head === null) { // 列表中第一节点
			head = node;
		} else {
			current = head; 
			
			// 循环列表，直到找到最后一项
			wihle(current.next){
				current = current.next;
			}
			
			// 找到最后一项，将其next赋值为node，建立链接
			current.next = node;
		}
		
		length++; // 链表长度加1
	};
	
	// 向列表的特定位置插入一个新的项
	this.insert = function(position, element){
	
		//检查越界值
		if (position >= 0 && position <= length){ //{1}
			var node = new Node(element),
				current = head,
				previous,
				index = 0;
				
			if (position === 0){ //在第一个位置添加
				node.next = current; //{2}
				head = node;
			} else {
			
				while (index++ < position){ //{3}
					previous = current;
					current = current.next;
				}
				
				node.next = current; //{4}
				previous.next = node; //{5}
			}
			
			length++; //更新列表的长度
			return true;
		} else {
			return false; //{6}
		}
		
	};
	
	// 从列表的特定位置移除一项
	this.removeAt = function(position){
		//检查越界值
		if (position > -1 && position < length){ // {1}
			var current = head, // {2}
			previous, // {3}
			index = 0; // {4}
			
			//移除第一项
			if (position === 0){ // {5}
				head = current.next;
			} else {
				while (index++ < position){ // {6}
					previous = current; // {7}
					current = current.next; // {8}
				}
			
				//将previous与current的下一项链接起来：跳过current，从而移除它
				previous.next = current.next; // {9}
			}
			
			length--; // {10}
			return current.element;
		} else {
			return null; // {11}
		}
	};
	
	// 从列表中移除一项
	this.remove = function(element){
		var index = this.indexOf(element);
		return this.removeAt(index);
	};
	
	// 返回元素在列表中的索引
	this.indexOf = function(element){
		var current = head, //{1}
			index = -1;
		while (current) { //{2}
			if (element === current.element) {
				return index; //{3}
			}
			index++; //{4}
			current = current.next; //{5}
		}
		return -1;
	};
	
	// 如果链表中不包含任何元素，返回 true ，如果链表长度大于0则返回 false
	this.isEmpty = function() {
		return length === 0;
	};
	
	// 返回链表包含的元素个数。与数组的 length 属性类似
	this.size = function() {
		return length;
	};
	
	// 由于列表项使用了 Node 类，就需要重写继承自JavaScript对象默认的toString 方法，让其只输出元素的值
	this.toString = function(){
		var current = head, //{1}
		string = ''; //{2}
		
		while (current) { //{3}
			string = current.element; //{4}
			current = current.next; //{5}
		}
		
		return string; //{6}
	};
	
	// 调试方法
	this.print = function(){};
}

//集合 [js-set]集合是由一组无序且唯一（即不能重复）的项组成的。
function Set(){
	let items = {}; // js对象不允许两个不同的属性，保证集合元素的唯一性
	this.has = function(value){
		// 区别 in可以查找原型链而 hasOwnProperty方法只会查找自身
		// return value in items;
		return items.hasOwnProperty(value);
	};
	
	this.add = function(value){
		if (!this.has(value)) {
			items[value] = value;
			return ture;
		}
		return false;
	};
	this.remove = function(value){
		if (this.has(value)) {
			delete items[value];
			return ture;
		}
		return false;
	};
	
	this.clear = function(){
		items = {};
	};
	
	this.size = function(){
		return Object.keys(items).length;
	};
	this.values = function(){
		return Object.keys(items);
	};
}

//字典 [js-map] 字典和散列表是用来存储唯一值（不重复的值）的数据结构。 两者都是[键，值]的形式来存储数据
function  Dictionary(){
	let items = {};
	
	this.has = function(key){
		return key in items;
	};
	
	this.set = function(key, value){
		items[key] = value;
	};
	
	this.remove = function(key){
		if (this.has(key)) {
			delete items[key];
			return true;
		}
		return false;
	};
	
	this.get = function(key){
		return this.has(key) ? items[key] : undefined;
	};
	
	this.values = function(){
		let values = {};
		for (let k in items) {
			if (this.has(k)) {
				values.push(items[k]);
			}
		}
		return values;
	};
	
	this.clear = function(){
		items = {};
	};
	
	this.getItems = function(){
		return items;
	};
}
/**/
export {Stack, Queue, LinkedList, Set, Dictionary,}
