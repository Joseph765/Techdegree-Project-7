import React, { Component } from 'react';
import { 
    NavLink
} from 'react-router-dom';

class Nav extends Component {

    search(search) {
        this.props.onSearch(search);
    }

    render() {
        return (
            <div className="main-nav">
                <ul>
                    <li><NavLink to="/cats" onClick={() => this.search('cats')}>Cats</NavLink></li>
                    <li><NavLink to="/dogs" onClick={() => this.search('dogs')}>Dogs</NavLink></li>
                    <li><NavLink to="/birds" onClick={() => this.search('birds')}>Birds</NavLink></li>
                </ul>
            </div>
        );
    };
}

export default Nav;