import React, { Component } from 'react';
import store from './store';
import { Provider} from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import './static/iconfont';

import Header from './common/header';
import Main from './main';
import Footer from './common/footer';

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter> 
            <div className="container">
              <Route path='/' component={Header}></Route>
              <Main></Main>    
              <Footer></Footer>
            </div>
        </BrowserRouter>    
      </Provider>
    );
  }
}

export default App;
