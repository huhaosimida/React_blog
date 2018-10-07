import React ,{ Component } from 'react';
import QQpic from './QQ.jpg';

class Sidebar extends Component{
	render() {
		return(
			<div className="col-md-3 column">
				<div className="sidebar">
					<div className="widget">
						<input type="search" name="word" placeholder="Search" />
					</div>
					<div className="widget">
						<div className="widget-title">
							<svg className="icon" aria-hidden="true">
								<use xlinkHref="#icon-categoryselected"></use>
							</svg>分类
						</div>
							<ul className="category-list">
								<li className="category-list-item"><a className="category-list-link" href="/">BOM、DOM</a></li>
								<li className="category-list-item"><a className="category-list-link" href="/">CSS</a></li>
							</ul>
					</div>
					<div className="widget">
						<div className="widget-title">
							<svg className="icon" aria-hidden="true">
								<use xlinkHref="#icon-fenxiang"></use>
							</svg>友情链接
						</div>
							<ul className="category-list">
								<li className="category-list-item"><a className="category-list-link" href="/">BOM、DOM</a></li>
								<li className="category-list-item"><a className="category-list-link" href="/">CSS</a></li>
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



export default Sidebar;