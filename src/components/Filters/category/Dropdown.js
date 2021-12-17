import React from "react";

const Dropdown = ({ name, changeID, total }) => {
  return (
    <div className="input-group mb-3">
      <select
        onChange={(e) => changeID(e.target.value)}
        className="form-select"
        id={name}
      >
        <option value="1">Choose...</option>
        {[...Array(total).keys()].map((item, index) => {
          return (
            <option value={item + 1}>
              {name} - {item + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Dropdown;