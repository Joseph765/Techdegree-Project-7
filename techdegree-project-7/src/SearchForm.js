import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SearchForm extends Component {

    state = {
        input: ''
    }

    onSubmit(e) {
        if (this.state.input === '') {
            e.preventDefault();
            return false;
        }
        e.preventDefault();
        this.props.history.push(`/search/${this.state.input}`);
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
                <button type="submit"><i className="fa fa-search"></i></button>
            </form>
        );
    };
}

export default withRouter(SearchForm);