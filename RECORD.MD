### 此文档用来记录自己搭建博客的进度和一些笔记

#### 2018/10/1-2018/10/7
- 完成React的项目搭建工作
- 完成前台页面的编写
- 利用Roure实现页面的跳转
- 利用redux实现对数据的管理


在React中，本地图片的引入应该用
  
    import Img from './static/xx.png';
    <img src={Img} alt='' />

reducer的拆分
src/store/reducer

	import {combineReducers} from 'redux-immutable';
	import {reducer as headerReducer} from '../common/header/store';
	const reducer = combineReducers({
		header:headerReducer
	})
	export default reducer;

src/common/header/store/index （如果不写/index，也是加载的相同路径）
	
	import reducer from './reducer';
	import * as actionCreators from './actionCreators';
	import * as constants from './constants';	//将action.type的字符串转换为常量，避免一些坑
	export {reducer,actionCreators,constants};


#### 关于immutable库的运用

	import { fromJS } from 'immutable';
	const defaultState = fromJS({}); //将Js对象或数组转换为immutable对象或数组

	export default (state = defaultState, action) => {
		switch(action.type) {
			case constants.NAV_CLICK :
				console.log('bbb');
				return state.set('active',false); //就可以利用set方法
			default :
				return state;
		}
	} 
	

#### 导航栏样式切换

	import {NavLink} from 'react-router-dom';
	...
	<NavLink to="/" exact activeClassName="current">
		首页
	</NavLink>
	//activeClassName可以判断当前路由是否处在活动状态，如果是，就添加样式current

我在写的过程中，自己的Header组件是写死的，在点击导航标签时，样式切换并未生效，需要手动刷新才生效
可能是因为在点击导航标签时，切换的只是body中的路由，Header组件并未更新，我就给Header组件添加一个Route
	
	<Route path='/' component={Header}></Route>

#### Route中exact属性是精确匹配
<Route path='/about' exact component={About}></Route>