import "./NameList.css";

const NameList = ({ names, handleClick }) => {
  return (
    <ul className="name-list-container">
      {names.map((nameObj) => (
        <li
          onClick={() => handleClick(nameObj)}
          className={
            nameObj.name === "Oksana" || nameObj.name === "Negin"
              ? "our-name name-card"
              : nameObj.sex === "f"
              ? "girl-name name-card"
              : "boy-name name-card"
          }
        >
          {nameObj.name}
        </li>
      ))}
    </ul>
  );
};

export default NameList;
