import "./NameList.css";

const NameList = ({ names, handleClick }) => {
  return (
    <ul className="name-list-container">
      {names.map((nameObj) => (
        <li
          onClick={() => handleClick(nameObj)}
          className={
            nameObj.sex === "f" ? "girl-name name-card" : "boy-name name-card"
          }
        >
          {nameObj.name}
        </li>
      ))}
    </ul>
  );
};

export default NameList;
