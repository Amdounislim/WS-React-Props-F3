import React from "react";
import propTypes from 'prop-types'

const User = ({name, email, age, children}) => {
  return (
    <div>
      {/* {console.log(props)} */}
      <h1>{name}</h1>
      <h3>{email}</h3>
      <h5>{age}</h5>
      {children}
    </div>
  );
};

User.defaultProps={
    name:"foulen",
    email:"foulen@gmail.com",
    age:'your age',
    children:<p>Attention !</p>
}

User.propTypes={
    name:propTypes.string,
    email:propTypes.string,
    age:propTypes.number,
    children:propTypes.node.isRequired
}


export default User;
