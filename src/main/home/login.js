import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import {actionCreators} from '../store';

class Register extends Component {
  render() {
    if (!this.props.loginStatus) {
      return (
        <div className="col-md-9 column">
          <div className="LoginBox">
            <input placeholder='账号' ref ={(input) => {this.account  = input }} />
            <input placeholder='密码' type='password' ref={(input) => {this.password = input}} />
            <button onClick={() => this.props.login(this.account,this.password)}>登陆</button>
          </div>
        </div>
      )
    }else {
      return <Redirect to='/'></Redirect>
    }
  }
}

const mapStateToProps = (state)	=> ({
	loginStatus: state.getIn(['home','login'])
});

const mapDisPatchToProps = (dispatch) => ({
	login(accountElem, passwordElem){
	  dispatch(actionCreators.login(accountElem.value, passwordElem.value))
	}
});

export default connect(mapStateToProps,mapDisPatchToProps)(Register);

