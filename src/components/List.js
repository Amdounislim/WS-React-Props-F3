import React from "react";
import propTypes from 'prop-types'

const List = ({ persons }) => {
  return (
    <div style={{display:"flex"}}>
      {persons.map((el, i) => (
        <div key={i}>
          <h1>{el.name}</h1>
          <h3>{el.email}</h3>
          <img src={el.src} />
          <h4>{el.age}</h4>
        </div>
      ))}
    </div>
  );
};

List.propTypes={
    persons : propTypes.arrayOf(
        propTypes.exact({
            name:propTypes.string,
            email:propTypes.string,
            src:propTypes.string,
            age:propTypes.number
        })
    )
}

export default List;
