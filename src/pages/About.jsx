import { Link } from "react-router-dom";
import aboutImg from "../images/about-pic.png";

const About = () => {
  return (
    <>
      <img
        className="about--img"
        src={aboutImg}
        alt="A man sitting on the roof of the van and watching the night sky"
      />
      <div className="about--container">
        <h1 className="about--title">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p className="about--description">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉) <br />
          <br />
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="about--inner_container">
          <h2 className="about--inner_title">
            Your destination is waiting. Your van is ready.
          </h2>
          <Link to="/vans" className="about--btn btn">
            Explore our vans
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
