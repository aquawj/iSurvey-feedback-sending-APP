import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Payments from './Payments';


class Header extends Component {
    renderContent(){
        switch(this.props.auth){
            case null:  //pending
                return;
            case false: //logged out/ new user
                return <li><a href='/auth/google'>Login with Google</a></li> ;
            default:  // logged in
                return(
                    <div>
                        <li>Welcome, you are logged in</li>
                        <li><a href='/api/logout'>Logout</a></li>
                    </div>
                );
        }
    }
    render(){
        console.log(this.props);
        return (
            <div>
                <nav>
                    <div className="nav-wrapper deep-purple lighten-2">
                        <Link to={this.props.auth ? '/surveys' : '/'}
                              className="left brand-logo">iSurvey</Link>
                        <ul className="right">
                            {this.renderContent()}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

/*function mapStateToProps(state){
    return {
        auth: state.auth
    };
}*/
//the same with above
function mapStateToProps({auth}){
    return {auth};
}

export default connect(mapStateToProps)(Header);