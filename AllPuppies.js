import React from "react";

const AllPuppies = () => {
    console.log(props);
    return (
        <div>
        <h1> All THe Puppies</h1>
        <h2>This Puppy is{props.puppy} </h2>
        </div>
    );
};

export default AllPuppies;
