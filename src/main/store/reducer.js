import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	articlesList: [],
	category:[],
	linkList: [],
	articlesdetail: [],
	articlesPage: 1,
	login: false
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.GET_INFO :
			return state.merge({
				articlesList: fromJS(action.articlesList),
				category:fromJS(action.category),
				linkList:fromJS(action.linkList),
				articlesdetail:fromJS(action.articlesdetail)
			});
			//加载更多文章的改变
			case constants.ADD_ARTICLE_LIST :
				return state.merge({
					articlesList: fromJS(action.articlesList),
					articlesPage : action.nextPage
			});
			//登陆状态的改变
			case constants.CHANGE_LOGIN :
				return state.set('login',action.value);
			//退出状态的改变
			case constants.LOGOUT :
				return state.set('login',action.value);
		default :
			return state;
	}
} 

