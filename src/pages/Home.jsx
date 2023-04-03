import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home--container">
      <h1 className="home--title">
        You got the travel plans, we got the travel vans.
      </h1>
      <p className="home--description">
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <Link to="/vans" className="home--btn btn">
        Find your van
      </Link>
    </div>
  );
};

export default Home;
