import React ,{Component} from 'react';
import {Route} from 'react-router-dom';

import ArticlesList from './articlesList';
import Articlesdetail from './articlesdetail';
import Sidebar from './sidebar';
import Catalog from './catalog';
import Resources from './resources';
import About from './about';
import Login from './login';
import Register from './register';
import './style.css';

class Main extends Component {
	
	render() {
		return (			
			<div className="row">
				<Route path='/' exact component={ArticlesList}></Route>
				<Route path='/articlesdetail' exact component={Articlesdetail}></Route>
				<Route path='/catalog' exact component={Catalog}></Route>
				<Route path='/resources' exact component={Resources}></Route>
				<Route path='/about' exact component={About}></Route>
				<Route path='/login' exact component={Login}></Route>
				<Route path='/register' exact component={Register}></Route>      
				<Sidebar></Sidebar>
			</div>		
		)
	}

}



export default Main;