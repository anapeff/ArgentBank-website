import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProfileAccount from '../../components/ProfileAccount/ProfileAccount';

function User() {
  return (
    <div>
    <header>
      <Header />
    </header>
    <main className="bg-dark">
    
      <h2 className="sr-only">Accounts</h2>
      <div className="group-accounts">
        <ProfileAccount title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
        <ProfileAccount title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
        <ProfileAccount title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
      </div>
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
);
}
export default User;
