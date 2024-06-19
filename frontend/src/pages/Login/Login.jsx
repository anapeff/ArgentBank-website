
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
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
  
  export default Login;