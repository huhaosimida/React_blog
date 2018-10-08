import React, { Component } from 'react';

class Catalog extends Component {
  render() {
    return (
			<div className="col-md-9 column">
				<div className="post">
					<div className="post-archive">
						<h2>2017</h2>
						<ul className="listing">
							<li><span className="date">2017/10/14</span><a href="/">前端监控--Puppeteer终探</a></li>
							<li><span className="date">2017/08/23</span><a href="/">UI自动化测试--Puppeteer再探</a></li>
							<li><span className="date">2017/08/17</span><a href="/">高级爬虫--Puppeteer初探</a></li>
							<li><span className="date">2017/05/23</span><a href="/">简易发布工具</a></li>
							<li><span className="date">2017/05/23</span><a href="/">CORS-跨域相关问题</a></li>
							<li><span className="date">2017/04/13</span><a href="/">前端安全-XSS注入</a></li>
							<li><span className="date">2017/02/27</span><a href="/">VueJS-项目搭建</a></li>
							<li><span className="date">2017/02/27</span><a href="/">VueJS-组件通信</a></li>
							<li><span className="date">2017/02/23</span><a href="/">前端工具-webpack</a></li>
						</ul>
						<h2>2016</h2>
						<ul className="listing">
							<li><span className="date">2016/11/01</span><a href="/">事件循环</a></li>
						</ul>
					</div>
				</div>		
			</div>
    );
  }
}

export default Catalog;
