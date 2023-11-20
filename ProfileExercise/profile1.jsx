// what to do ? user profile card
// how to do? props,props validation

import React from "react";
import PropTypes from "prop-types"

function Profile1(props){//define user data validating data
    
    return(
        <>
        <div>
            <span>name:{props.name}</span><br/>
            <span>age:{props.age}</span> <br/>
            <span>email:{props.email}</span>
        </div>
        </>
    )
}

Profile1.propTypes={//validation of data
    name:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired,
    email:PropTypes.string.isRequired,
}
export default Profile1;