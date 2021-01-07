import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Route from './components/Route';
import Resume from './components/Resume';
import About from './components/About';
import CV from './components/CV';
import Login from './components/Login';
import Blog from './components/Blog';
import './CSS/Header.css';

class App extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/cv">
          <CV />
        </Route>
        <Footer/>

      </div>
    );
  }
}

export default App;