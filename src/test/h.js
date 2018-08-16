import React, { Component } from 'react';



//列表渲染2
const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];


export default class Aa extends Component {
	constructor(props) {
        super(props);
        this.sidebar = (
		    <ul>
		      {posts.map((post) =>
		        <li key={post.id}>
		          {post.title}
		        </li>
		      )}
		    </ul>
		  );
		this.content =posts.map((post) =>
		    <div key={post.id}>
		      <h3>{post.title}</h3>
		      <p>{post.content}</p>
		    </div>
		);
    }
    
    render() {
        return(<div>
      		{this.sidebar}
      	<hr />
      		{this.content}
    	</div>);
    }
}