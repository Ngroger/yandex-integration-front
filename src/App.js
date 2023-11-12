import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import RegistrationPage from './pages/RegistrationPage';
import LeftMenu from './ui/LeftMenu';
import FormsPage from './pages/FormsPage';
import Navbar from './ui/Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isMenuOpen: true
    };
};

  toggleMenu = () => {
      this.setState((prevState) => ({
          isMenuOpen: !prevState.isMenuOpen
      }));
  };

  render() {
    const { isMenuOpen } = this.state;

    return (
      <Router>
        <LeftMenu isMenuOpen={isMenuOpen} toggleMenu={this.toggleMenu}/>
        <Routes>
          <Route path="/main" element={<MainPage />} />
          <Route path="/reg" element={<RegistrationPage />} />
          <Route path="/forms" element={<FormsPage />} />
        </Routes>
      </Router>
    );
  }
}

export default App;