import React, { Component } from 'react';
import {connect} from 'react-redux';

class Articlesdetail extends Component {
  
  render() {
    return (
      <div className="col-md-9 column">
        {
          this.props.articlesdetail.map((item,index) => (
            <div className="post" key={index}>
              <h1 className="post-title">{item.get('title')}</h1>
              <div className="post-meta">
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-calendar"></use>
                </svg>&nbsp;{item.get('time')}
              </div>
              <div className="post-content">
                {item.get('content')}
              </div>
            </div> 
          ))
        }       
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
	articlesdetail: state.getIn(['home','articlesdetail'])
})



export default connect(mapStateToProps,null)(Articlesdetail);
