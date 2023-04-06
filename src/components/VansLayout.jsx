import { NavLink, Link, Outlet, useParams } from "react-router-dom";
import VanHeader from "../pages/Host/VanHeader";
import { useEffect, useState } from "react";
const VansLayout = () => {
  const [vanDetails, setVanDetails] = useState(null);
  const params = useParams();
  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVanDetails(data.vans));
  }, [params.id]);
  return vanDetails ? (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>

      <VanHeader
        img={vanDetails.imageUrl}
        name={vanDetails.name}
        price={vanDetails.price}
        type={vanDetails.type}
      />
      <ul>
        <li>
          <NavLink
            to={`.`}
            end
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            Details
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`pricing`}
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`photos`}
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            Photos
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </section>
  ) : (
    <h2>Loading</h2>
  );
};

export default VansLayout;
