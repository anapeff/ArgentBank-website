import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LoginForm from '../../components/LoginForm/LoginForm';

function Login() {
    return (
      <div>
        <Header />
        <main className="bg-dark">
          <LoginForm />
        </main>
        <Footer />
      </div>
    );
  }
  
  export default Login;