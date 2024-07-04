
import React, { Component } from 'react';

class Header extends Component {
    render() {
        console.log(this.props.title);
        return (
            <div>
                Header Comp           <br/>                
                {this.props.title}    <br/>
                {this.props.desc}     <br/>
                {this.props.newData}  <br/>  {/* this is the 2nd State */}
            </div>

        );
    };
};

export default Header