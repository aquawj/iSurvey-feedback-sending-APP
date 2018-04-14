import React, {Component} from 'react';

class Header extends Component {
    render(){
        return (
            <div>
                <nav>
                    <div className="nav-wrapper deep-purple lighten-2">
                        <a href="#" className="brand-logo">Emaily</a>
                        <ul className="right">
                            <li><a>Login</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;