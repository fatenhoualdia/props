import React from 'react'
import PropTypes from 'prop-types';


  function profile(props) {
    function handleName() {
      alert(props.fullName);
    }
  return (
    <>
    <div>{props.children}</div>
    <div>
      <h1>{props.fullName}</h1>
      <p>{props.bio}</p>
      
      <h4>{props.profession}</h4>
    </div>
    <button onClick={handleName}>Alert</button>
  </>
);
}

profile.propTypes = {
fullName: PropTypes.string,
bio: PropTypes.string,
profession: PropTypes.string,
};
    <div>profile</div>
  


export default profile