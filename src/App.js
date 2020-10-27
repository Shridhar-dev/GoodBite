import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Trusted from './Trusted';
import Footer from './Footer';
import Charity from './Charity';
import Delivery from './Delivery';
import CardSection from './CardSection';
import Info from './Info';


function App() {
  return (
    <div className="App">
      <Header />
      <Trusted />
      <Info />
      <CardSection />
      <Delivery />
      <Charity />
      <Footer />
    </div>
  );
}

export default App;
