/* 数据类型判断 */
const type = function (o) {
	var s = Object.prototype.toString.call(o);
	return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};
['Null',
	'Undefined',
	'Object',
	'Array',
	'String',
	'Number',
	'Boolean',
	'Function',
	'RegExp'
].forEach(function (t) {
	type['is' + t] = function (o) {
		return type(o) === t.toLowerCase();
	};
});

/* 金额显示 */
var moneyShow = function (str) {
	var temp = 0 ;
	str = str + '';
	var arr = str.split("").reverse();
	let s = arr.reduce((x,y)=>{
		temp++;
		if(temp%3 == 0){
			return x+","+y;
		}else{
			return x+""+y;
		}
	})
	return s.split("").reverse().join("");
}