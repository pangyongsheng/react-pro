var add = function (x) {
	return function (y) {
		return x + y;
	}
}
var addTen = add(10)
console.log(addTen(1)) // 11


/*结合律*/
var compose = function (f, g) { // 执行顺序为从右到左
	return function (x) {
		return f(g(x));
	}
}
// f 和 g 都是函数，x 是在它们之间通过“管道”传输的值。
var toUppercase = function (x) { return x.toUpperCase() };
var exclaim = function (x) { return `${x}!` };
var shout = compose(exclaim, toUppercase);
var test = shout('I am fanerge')
console.log(test) // I AM FANERGE!


/*声明式*/
// 命令式
var makes = [];
for (let i, len = cars.length; i++) {
	makes.push(cars[i]make)	
}
// 声明式
var makes = cars.map((car) => { return car.make; })