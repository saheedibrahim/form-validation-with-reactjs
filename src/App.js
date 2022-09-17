import React from 'react';
import './App.css';
import SignIn from './components/sign-in/sign-in';
import SignUp from './components/sign-up/sign-up';
import Home from './components/home/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path='/' element= {<Home />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
