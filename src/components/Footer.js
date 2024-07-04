import React, { Component } from 'react';
import { connect } from "react-redux";
import { combineReducers } from 'redux';

// const store = createStore();

class Footer extends React.Component {

    render() {
        return (
            <div>
                {this.props.title}
            </div>
            
        );
    };
};


export default Footer;
