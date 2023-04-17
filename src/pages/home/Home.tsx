import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured type="movie" />
      <List title="Continue Watching" />
      <List title="Trending Now" />
      <List title="Action" />
      <List title="Drama" />
    </div>
  );
};

export default Home;
