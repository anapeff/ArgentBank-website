
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LoginForm from '../../components/LoginForm/LoginForm';
function Login() {
    return (
        <div>
        <Header />
          <main className="main bg-dark">
            <section className="sign-in-content">
              <i className="fa fa-user-circle sign-in-icon"></i>
              <h1>Sign In</h1>
              <LoginForm />
            </section>
          </main>
        <Footer />
      </div>
      )
    }
  export default Login;