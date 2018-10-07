import React, { Component } from 'react';

class Resources extends Component {
  
  render() {
    return (
      <div className="col-md-9 column">
        <div className="post">
          <h1 className="post-title">各类学习资源汇总</h1>
          <div className="post-content">
            <p>JS、前端：</p>
            <ul>
              <li><a href="/">ES6-阮一峰</a></li>
              <li><a href="/">mozilla开发者网络(mdn)</a></li>
              <li><a href="/">webpack官方文档</a></li>
              <li><a href="/">vuejs2.0官方文档</a></li>
              <li><a href="/">react-native中文文档</a></li>
            </ul>
            <p>NodeJS:</p>
            <ul>
              <li><a href="/">nodejs官方文档</a></li>
              <li><a href="/">expressjs中文文档</a></li>
              <li><a href="/">thinkjs官方文档</a></li>
              <li><a href="/">egg官方文档</a></li>
            </ul>
          </div>
        </div>	
      </div>
    );
  }
}

export default Resources;
