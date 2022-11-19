const Image_Re = ({ props, name }) => {
  return (
    <div className="Image_Re">
      <div className="image">
        <img alt={name} src={props} />
      </div>
      <div className="name">
        <h3>{name}</h3>
      </div>
    </div>
  );
};
export default Image_Re;
