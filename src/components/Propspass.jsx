import React from 'react'
import PropTypes from 'prop-types'
import { FaFacebook } from "react-icons/fa";

const Propspass = (props) => {
  return (
    <>
    <div>
<span><FaFacebook/></span>
     <h1>{props.name}</h1>
     <h1>{props.age}</h1>
     <h1>{props.isMarried.toString()}</h1>
     <h1>{props.person[0]}</h1>
     <h1>{props.person[1]}</h1>
     <h1>{props.person[2]}</h1>
     <h1>{props.person[3]}</h1>
     <h1>{props.person[4]}</h1>

    </div>
     
    </>
    
  );
};
Propspass.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired,
    isMarried: PropTypes.bool.isRequired,
    person: PropTypes.array.isRequired
};

export default Propspass;