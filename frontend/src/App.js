import React, {useState}  from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import LoginForm from './screens/LoginForm/LoginForm';
import RegistrationForm from './screens/RegistrationForm/RegistrationForm';
import AlertComponent from './screens/AlertComponent/AlertComponent';
const App = () => {
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path="/register">
              <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/login">
              <LoginForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
        </Container>
        <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/>
      </main>
      <Footer />
    </Router>
  )
}

export default App
