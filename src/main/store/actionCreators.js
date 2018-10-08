import * as constants from './constants';
import axios from 'axios';

//获取首页的数据
export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
			const result = res.data.data;
			dispatch(getInfo(result));
		})	
  }
}
//首页的数据的提交给ruducer
const getInfo = (result) => ({
  type: constants.GET_INFO,
  articlesList: result.articlesList,
  category: result.category,
  linkList: result.linkList,
  articlesdetail: result.articlesdetail
});

//点击页码加载其他文章列表
export const getMoreInfo = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then((res) => {
			const result = res.data.data;
			dispatch(getAddInfo(result,page+1));
		})	
  }
}
//点击页码加载其他文章列表的数据提交给reducer
const getAddInfo = (result,nextPage) => ({
  type: constants.ADD_ARTICLE_LIST,
  articlesList: result.articlesList,
  nextPage
});


//验证登陆是否成功
export const login = (account,password) => {
	return (dispatch) => {
		axios.get('/api/login.json?account=' + account + '&password=' + password).then((res) => {
			const result = res.data.data;
			if (result) {
				dispatch(changeLogin());
			}else {
				alert('登陆失败');
			}
		})
	}
}
//登陆状态提交给reducer
const changeLogin = () => ({
	type: constants.CHANGE_LOGIN,
	value: true
});



//退出状态提交给reducer
export const logout = () => ({
	type: constants.LOGOUT,
	value: false
});
