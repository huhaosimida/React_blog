import React, { Component } from 'react';

class Articlesdetail extends Component {
  
  render() {
    return (
      <div className="col-md-9 column">
        <div className="post">
          <h1 className="post-title">高级爬虫--Puppeteer初探</h1>
          <div className="post-meta">Aug 17, 2017</div>
          <div className="post-content">
          <p><strong>首先介绍Puppeteer</strong></p>
            <ul>
              <li>Puppeteer是一个node库，他提供了一组用来操纵Chrome的API，理论上使用它可以做任何Chrome可以做的事</li>
              <li>有点类似于PhantomJS，但Puppeteer由Chrome官方团队进行维护，前景更好</li>
              <li>Puppeteer的应用场景会非常多，就爬虫领域来说，远比一般的爬虫工具功能更丰富，性能分析、自动化测试也不在话下，今天先探讨爬虫相关</li>
              <li><a href="/">Puppeteer官方文档请猛戳这里</a></li>
            </ul>
          </div>
        </div> 
      </div>
    );
  }
}

export default Articlesdetail;
