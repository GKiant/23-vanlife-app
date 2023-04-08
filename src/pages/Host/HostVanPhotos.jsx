import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
  const { currentVan } = useOutletContext();
  return (
    <img
      src={currentVan.imageUrl}
      className="host-van-detail-image"
      alt="photo of the light brown van, parked near the sea"
    />
  );
};

export default HostVanPhotos;
