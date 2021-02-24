const Validation = ({ inputLength }) => {
  return (
    <div>
      {inputLength > 5 ? <p>text long enough</p> : <p>text too short</p>}
    </div>
  );
};

export default Validation;
