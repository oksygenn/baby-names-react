import "./ChooseSexButton.css";
import "../App.css";

const ChooseSexButton = ({ handleButton, sex }) => {
  let caption;
  let className;
  if (sex === "f") {
    caption = "Female";
    className = "girl-btn sex-btn";
  } else if (sex === "m") {
    caption = "Male";
    className = "boy-btn sex-btn";
  } else {
    caption = "All";
    className = "all-names-btn sex-btn";
  }
  return (
    <button className={className} onClick={() => handleButton(sex)}>
      {caption}
    </button>
  );
};

export default ChooseSexButton;
