import React ,{ Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {actionCreators} from '../store';

class ArticlesList extends Component{
	render() {
		return(
			<div className="col-md-9 column content_container">
				{
					this.props.articlesList.map((item,index) => (
						<div className="post" key={index}>
							<h2 className="post-title">
								<Link to={'/articlesdetail/' + item.get('id')}>
									{item.get('title')}
								</Link>
							</h2>
							<div className="post-meta">
								<svg className="icon" aria-hidden="true">
									<use xlinkHref="#icon-calendar"></use>
								</svg>&nbsp;{item.get('time')}
							</div>
							<div className="post-content">{item.get('desc')}</div>
							<p className="readmore">
								<Link to={'/articlesdetail/' + item.get('id')}>阅读更多</Link>
							</p>
						</div>
					))
				}

				<nav className="page-navigator">
					<Link className="prev" rel="prev" to={"/"}  onClick={() => this.props.getInfo()}>上一页</Link>
					<Link className="page-number" to={"/"}>1</Link>
					<Link className="page-number current" to={"/"}>2</Link>
					<Link className="page-number" to={"/"}>3</Link>
					<Link className="page-number" to={"/"}>4</Link>
					<Link className="next" rel="next" to={"/"} onClick={() => this.props.getMoreList(this.props.page)} >下一页</Link>
				</nav>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	articlesList: state.getIn(['home','articlesList']),
	page: state.getIn(['home','articlesPage'])
})

const mapDisPatchToProps = (dispatch) => ({
	getMoreList(page) {
		const action =actionCreators.getMoreInfo(page);
		dispatch(action);
	}
})


export default connect(mapStateToProps,mapDisPatchToProps)(ArticlesList);