
// import { useEffect, useState} from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import List from './components/Header';

import React, {Component} from 'react';
import './App.css';
import Myimg from './assets/professional-web-design.png';
// import React from 'react';


class App extends Component {

  state = {
            products: [
              {id: 1, title: 'item 1'},
              {id: 2, title: 'item 2'},
              {id: 3, title: 'item 3'},
              {id: 4, title: 'item 4'},
            ]
          } 

  state2 = {
            name2: 'this is the 2nd name',
            desc2: 'this is the 2nd State',
          };


  render() {
      console.log('State2.name2:',this.state2.name2)
      console.log('State2.desc2:',this.state2.desc2)
      return (
        <div className="App"> {/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  App Start */}
          
            <img src={Myimg} width='300' height='200'/>
            
            Hello React above the Header
          <Header title="Header Comp2"
                  desc="this is header component"
                  newData={this.state2.desc2}
          />

          Content ..........        
          {this.state.products.map( prod => <div key={prod.id}>{prod.title}</div> )}
          
          <List products={this.state.products}/>
          <Footer title="Footer Comp"/>

        </div> 

      );
  };
}; {/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  App Start */}

export default App;
