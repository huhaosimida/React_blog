import React ,{ Component } from 'react';

class ArticlesList extends Component{
	render() {
		return(
			<div className="col-md-9 column content_container">
				<div className="post">
					<h2 className="post-title">
						<a href="/articlesdetail">UI自动化测试--Puppeteer再探</a>
					</h2>
					<div className="post-meta">
						<svg className="icon" aria-hidden="true">
							<use xlinkHref="#icon-calendar"></use>
						</svg>2045-15-5
					</div>
					<div className="post-content">自动化测试自动化测试自动化测试自动化测试自动化测试自动化测试自动化测试自动化测试自动化测试自动化测试自动化测试自动化测试自动化测试自动化测试自动化测试自动化测试</div>
					<p className="readmore"><a href="/">阅读更多</a></p>
				</div>
				<div className="post">
					<h2 className="post-title">UI自动化测试</h2>
					<div className="post-meta">
						<svg className="icon" aria-hidden="true">
							<use xlinkHref="#icon-calendar"></use>
						</svg>2045-15-5
					</div>
					<div className="post-content">自动化测试自动化测试自动化测试自动化测试自动化测试自动化测试自动化测试自动化测试自动化测试自动化测试自动化测试自动化测试自动化测试自动化测试自动化测试自动化测试</div>
					<p className="readmore"><a href="/">阅读更多</a></p>
				</div>
				<div className="post">
					<h2 className="post-title">UI自动化测试</h2>
					<div className="post-meta">
						<svg className="icon" aria-hidden="true">
							<use xlinkHref="#icon-calendar"></use>
						</svg>2045-15-5
					</div>
					<div className="post-content">自动化测试自动化测试自动化测试自动化测试自动化测试自动化测试自动化测试自动化测试自动化测试自动化测试自动化测试自动化测试自动化测试自动化测试自动化测试自动化测试</div>
					<p className="readmore"><a href="/">阅读更多</a></p>
				</div>
				<nav className="page-navigator">
					<a className="prev" rel="prev" href="/">上一页</a>
					<a className="page-number" href="/">1</a>
					<span className="page-number current">2</span>
					<a className="page-number" href="/">3</a>
					<a className="page-number" href="/">4</a>
					<a className="next" rel="next" href="/">下一页</a>
				</nav>
			</div>
		)
	}
}



export default ArticlesList;