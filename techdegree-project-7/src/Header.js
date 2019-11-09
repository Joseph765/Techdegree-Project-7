import React from 'react';
import SearchForm from './SearchForm';
import Nav from './Nav';

const Header = (props) => {
    return (
    <header className="App-header">
        <SearchForm onSearch={props.onSearch}/>
        <Nav onSearch={props.onSearch}/>
    </header>
    );
}

export default Header;