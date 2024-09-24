import RecipeList from '../components/RecipeList';
import Footer from '../components/UI/Footer';
import Header from '../components/UI/Header';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <RecipeList />
      <Footer />
    </div>
  );
};

export default HomePage;
