import React from 'react';
import FilterBtn from '../FilterBtn';

const Gender = () => {
  let gender = ['female', 'male', 'genderless', 'unknown'];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          Gender
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
        {gender.map((item, ind) => (
          <FilterBtn key={ind} name='gender' index={ind} item={item}/>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Gender
