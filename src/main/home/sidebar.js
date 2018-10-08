import React ,{ Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import QQpic from './QQ.jpg';


class Sidebar extends Component{
	render() {
		return(
			<div className="col-md-3 column">
				<div className="sidebar">
					{/* <div className="widget">
						<input type="search" name="word" placeholder="Search" />
					</div> */}
					<div className="widget">
						<div className="widget-title">
							<svg className="icon" aria-hidden="true">
								<use xlinkHref="#icon-categoryselected"></use>
							</svg>分类
						</div>						
						<ul className="category-list">
							{
							this.props.category.map((item,index) => (
								<li key={index} className="category-list-item">
									<Link className="category-list-link"  to={'/'}>{item.get('title')}</Link>
								</li>
							))
							}
						</ul>
					</div>
					<div className="widget">
						<div className="widget-title">
							<svg className="icon" aria-hidden="true">
								<use xlinkHref="#icon-fenxiang"></use>
							</svg>友情链接
						</div>
							<ul className="category-list">
							{
							this.props.linkList.map((item,index) => (
								<li key={index} className="category-list-item">
									<a className="category-list-link"  href={item.get('url')}>{item.get('title')}</a>
								</li>
							))
							}
							</ul>
					</div>
					<div className="widget">
						<div className="widget-title">
							<svg className="icon" aria-hidden="true">
								<use xlinkHref="#icon-web-icon-"></use>
							</svg>Tencent、QQ交流群
						</div>
						<a href="/" title="" className="fancybox" rel="gallery"><img src={QQpic} style={{marginTop: 15+'px',width:180 + 'px'}} alt="" /></a>
					</div>
				</div>	
			</div>
		)
	}
	
}

const mapStateToProps = (state) => ({
	category: state.getIn(['home','category']),
	linkList: state.getIn(['home','linkList'])
})



export default connect(mapStateToProps,null)(Sidebar);