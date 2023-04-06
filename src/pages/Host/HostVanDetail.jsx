import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const HostVanDetail = () => {
  const [vanDetails, setVanDetails] = useState(null);
  const params = useParams();
  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVanDetails(data.vans));
  }, [params.id]);
  return (
    <div>
      {vanDetails ? (
        <div>
          <p>
            <strong>Name:</strong> {vanDetails.name}
          </p>
          <p>
            <strong>Category:</strong> {vanDetails.type}
          </p>
          <p>
            <strong>Description:</strong> {vanDetails.description}
          </p>
          <p>
            <strong>Visibility:</strong> Public
          </p>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default HostVanDetail;
