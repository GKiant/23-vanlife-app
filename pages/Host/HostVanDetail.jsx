import { Suspense } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";
import { getVan } from "../../api";
import { requireAuth } from "../../utils";

export const loader = async ({ params, request }) => {
  await requireAuth(request);
  return defer({ vans: getVan(params.id) });
};

const HostVanDetail = () => {
  const dataPromise = useLoaderData();

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  const getVanDetailElements = (van) => {
    return (
      <section>
        <Link to=".." relative="path" className="back-button">
          &larr; <span>Back to all vans</span>
        </Link>

        <div className="host-van-detail-layout-container">
          <div className="host-van-detail">
            <img src={van.imageUrl} />
            <div className="host-van-detail-info-text">
              <i className={`van-type van-type-${van.type}`}>{van.type}</i>
              <h3>{van.name}</h3>
              <h4>${van.price}/day</h4>
            </div>
          </div>

          <nav className="host-van-detail-nav">
            <NavLink
              to="."
              end
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Details
            </NavLink>
            <NavLink
              to="pricing"
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Pricing
            </NavLink>
            <NavLink
              to="photos"
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Photos
            </NavLink>
          </nav>
          <Outlet context={{ van }} />
        </div>
      </section>
    );
  };
  return (
    <Suspense fallback={<h2>Loading details...</h2>}>
      <Await resolve={dataPromise.vans}>{getVanDetailElements}</Await>
    </Suspense>
  );
};

export default HostVanDetail;
