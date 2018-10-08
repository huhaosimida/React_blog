import React, { Component } from 'react';

class Login extends Component {
  
  render() {
    return (
      <div className="col-md-9 column">
        <div className="LoginBox">
          <input placeholder='账号' />
					<input placeholder='密码' type='password' />
          <input placeholder='确认密码' type='password' />
					<button>注册</button>
        </div>
      </div>
    );
  }
}

export default Login;
