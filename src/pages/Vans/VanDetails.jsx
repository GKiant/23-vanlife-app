import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const VanDetails = () => {
  const [vanData, setVanData] = useState(null);
  const params = useParams();

  useEffect(() => {
    try {
      fetch(`/api/vans/${params.id}`)
        .then((res) => res.json())
        .then((data) => setVanData(data.vans));
    } catch (error) {
      console.log(error);
    }
  }, [params.id]);

  return (
    <div className="van-detail-container">
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
