import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";

const VanDetails = () => {
  const [vanData, setVanData] = useState(null);
  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    try {
      fetch(`/api/vans/${params.id}`)
        .then((res) => res.json())
        .then((data) => setVanData(data.vans));
    } catch (error) {
      console.log(error);
    }
  }, [params.id]);

  const search = location.state?.search || "";
  const vansType = location.state?.type || "all";

  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <span>{`Back to ${vansType} vans`}</span>
      </Link>
      {vanData ? (
        <div className="van-detail">
          <img src={vanData.imageUrl} />
          <i className={`van-type ${vanData.type} selected`}>{vanData.type}</i>
          <h2>{vanData.name}</h2>
          <p className="van-price">
            <span>${vanData.price}</span>/day
          </p>
          <p className="van-description">{vanData.description}</p>
          <button className="link-button btn">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default VanDetails;
