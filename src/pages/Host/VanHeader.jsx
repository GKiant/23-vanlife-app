const VanHeader = ({ img, name, price, type }) => {
  return (
    <div className="host-van-detail-layout-container">
      <div className="host-van-detail">
        <img src={img} />
        <div className="host-van-detail-info-text">
          <i className={`van-type van-type-${type}`}>{type}</i>
          <h3>{name}</h3>
          <h4>${price}/day</h4>
        </div>
      </div>
    </div>
  );
};

export default VanHeader;
