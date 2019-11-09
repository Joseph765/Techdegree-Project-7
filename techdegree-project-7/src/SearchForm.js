import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchForm extends Component {

    state = {
        input: ''
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onSearch(this.state.input);
        e.currentTarget.reset();
    }

    render() {
        return (
            <form className="search-form" onSubmit={ (e) => this.onSubmit(e) }>
                <input type="text" placeholder="Search" onChange={ (e) => {
                    this.setState({
                        input: e.target.value
                    })
                }} />
                <button type="submit"><Link type="submit" to={`/${this.state.input}`}/></button>
            </form>
        );
    };
}

export default SearchForm;