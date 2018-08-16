import React, { Component } from 'react';

import Icon from '../assets/logo.png';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

const user=0;


// const user = {
//   firstName: 'pang',
//   lastName: 'yongsheng'
// };


const element = (
  <div>
    Hello, {getGreeting(user)}!
    <img src={Icon}/>
  </div>
);


export default class Aa extends Component {
    render() {
        return  element
    }
}