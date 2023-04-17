import {
  Link,
  useLocation,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";
import { getVan } from "../../api";
import { Suspense } from "react";

export const loader = ({ params }) => {
  return defer({ vans: getVan(params.id) });
};

const VanDetail = () => {
  const location = useLocation();
  const dataPromise = useLoaderData();

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  const getDetailElements = (van) => {
    return (
      <div className="van-detail-container">
        <Link to={`..${search}`} relative="path" className="back-button">
          &larr; <span>Back to {type} vans</span>
        </Link>

        <div className="van-detail">
          <img src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      </div>
    );
  };

  return (
    <Suspense fallback={<h2>Loading details...</h2>}>
      <Await resolve={dataPromise.vans}>{getDetailElements}</Await>
    </Suspense>
  );
};

export default VanDetail;
