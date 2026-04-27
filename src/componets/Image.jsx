const Image = function (props) {
  return (
    <div>
      <img src={props.link} alt={props.description} />
    </div>
  );
};

export default Image;
