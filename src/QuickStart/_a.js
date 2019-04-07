import React, { Component } from 'react';
import a from './ttt.js';

//组件 & Props
class A extends Component {

	toc(url){
        return new Promise((RES, REJ) => {
        fetch(url).then(r => r.blob()).then(blob => {
          const reader = new FileReader();
          reader.onload = (e) => {
            const data = e.target.result;
            RES(data.split('base64,')[1]);
          }
          reader.readAsDataURL(blob);
        }).catch(REJ);
      })
    }
    async aa(){
    	var a=await this.toc('https://lc-yee5xnhu.cn-n1.lcfile.com/78cb08ed395dec020a3d.jpg');
    	console.log(a)
    	return a;
    }


    render() {
    	 
    	//let y = this.aa();
    	
    	// a.then(function(a){
    	// 	console.log(a);
    	// },function(err){
    	// 	console.log(err);
    	// })

    	//console.log(a);
        return(
        	<div>
        		<img src="https://lc-yee5xnhu.cn-n1.lcfile.com/78cb08ed395dec020a3d.jpg"/>
        	</div>
        );
    }
}									

//使用组件
const elemet =  (<A names="name"/>);

export default class Aa extends Component{
	 render() {
        return <A names="name"/>
    }
}
