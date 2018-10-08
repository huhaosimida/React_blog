import React ,{Component} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {actionCreators} from './store';

import ArticlesList from './home/articlesList';
import Articlesdetail from './home/articlesdetail';
import Sidebar from './home/sidebar';
import Catalog from './home/catalog';
import Resources from './home/resources';
import About from './home/about';
import Login from './home/login';
import Register from './home/register';
import './style.css';

class Main extends Component {
	
	render() {
		return (			
			<div className="row">
				<Route path='/' exact component={ArticlesList}></Route>
				<Route path='/articlesdetail/:id' exact component={Articlesdetail}></Route>
				<Route path='/catalog' exact component={Catalog}></Route>
				<Route path='/resources' exact component={Resources}></Route>
				<Route path='/about' exact component={About}></Route>
				<Route path='/login' exact component={Login}></Route>
				<Route path='/register' exact component={Register}></Route>      
				<Sidebar></Sidebar>
			</div>		
		)
	}
	componentDidMount() {
		this.props.getInfo();
	}
}

const mapDisPatchToProps = (dispatch) => ({
	getInfo() {
		const action =actionCreators.getHomeInfo();
		dispatch(action);
	}
});

export default connect(null,mapDisPatchToProps)(Main);