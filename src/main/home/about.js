import React, { Component } from 'react';

class About extends Component {
  
  render() {
    return (
      <div className="col-md-9 column">
        <div className="post">
          <h1 className="post-title">关于我</h1>
            <div className="post-content">
            <p>JavaScript瞭望塔，一个记录前端相关技能的地方，欢迎拍砖，有兴趣加群的朋友可以加群交流</p>
            <p>至于Node、Linux的故事，会在未来的某天开始</p>
            <p>工作、学习、思考都是为了更好的生活</p>
            <p>这里整理的都是一些技术相关的文章，微博也是可以逛逛的嘛…</p>
            <p>
              <svg className="icon" aria-hidden="true">
								<use xlinkHref="#icon-guanyu"></use>
							</svg>: <a href="/">Github</a>
            </p>
            <p>
              <svg className="icon" aria-hidden="true">
								<use xlinkHref="#icon-guanyu"></use>
							</svg> : <a href="/">掘金</a>
            </p>
            <p>
              <svg className="icon" aria-hidden="true">
								<use xlinkHref="#icon-guanyu"></use>
							</svg>: <a href="/">微博</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
