import React ,{ Component } from 'react';
import {connect} from 'react-redux';
import './style.css';
import Logo from '../../static/tower.png';
import {NavLink} from 'react-router-dom';
import { actionCreators as loginActionCreators } from '../../main/store'

class Header extends Component{

	render() {
		return(		
			<div>
				<div className="row">
					<div className="col-md-5 column">
						<a href="/" className="logo"><img src={Logo} alt='' /></a>
						<div className="site_name">
							<a href="/" className="author">{this.props.author}</a>
							<p className="desc">{this.props.Juzi}</p>
					  </div>
				  </div>
					<div className="col-md-7 column">
						<div className="nav_menu">
							<NavLink to="/" exact activeClassName="current">
								<svg className="icon" aria-hidden="true">
									<use xlinkHref="#icon-shouye1"></use>
								</svg>首页 
							</NavLink>
							<NavLink to='/catalog' exact activeClassName="current">
								<svg className="icon" aria-hidden="true">
									<use xlinkHref="#icon-archive"></use>
								</svg>归档
							</NavLink>
							<NavLink to="/resources" exact activeClassName="current">
								<svg className="icon" aria-hidden="true">
									<use xlinkHref="#icon-ziyuan"></use>
								</svg>资源
							</NavLink>
							<NavLink to="/about" exact activeClassName="current">
								<svg className="icon" aria-hidden="true">
									<use xlinkHref="#icon-guanyu"></use>
								</svg>关于
							</NavLink>
							{
							this.props.login ?
								<NavLink to="/" exact onClick={this.props.logout}>
									<svg className="icon" aria-hidden="true">
										<use xlinkHref="#icon-tuichudenglu"></use>
									</svg>退出
								</NavLink>							
								:
								<span>
									<NavLink to="/login" exact activeClassName="current">
										<svg className="icon" aria-hidden="true">
											<use xlinkHref="#icon-denglu"></use>
										</svg>登陆
									</NavLink>
									<NavLink to="/register" exact activeClassName="current">
										<svg className="icon" aria-hidden="true">
											<use xlinkHref="#icon-zhuce"></use>
										</svg>注册
									</NavLink>
								</span>
							}				
						</div>
					</div>
				</div>
				<div className="border-1px"></div>	
			</div>
		)
	}
}


const mapStateToProps = (state) => {
	return {
		author: state.getIn(['header', 'author']),
		Juzi: state.getIn(['header', 'Juzi']),
		active: state.getIn(['header', 'active']),
		login: state.getIn(['home', 'login'])
	}
}

const mapDispathToProps = (dispatch) => {
	return {
		logout() {
			dispatch(loginActionCreators.logout());
		}
	}
}
export default connect(mapStateToProps,mapDispathToProps)(Header);