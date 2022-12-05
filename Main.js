import React from "react";
import AllPuppies from "./AllPuppies";

const puppies = [{"id":10016,"name":"Denali","breed":"German Shepherd Mix","status":"bench","imageUrl":"https://i.postimg.cc/Ls1Ps7Jt/3-FEAFFEF-D0-FB-4848-A8-BA-4-BCF85-C46351.jpg","createdAt":"2022-12-05T02:29:16.210Z","updatedAt":"2022-12-05T02:29:16.210Z","teamId":533,"cohortId":283},{"id":9989,"name":"Rex","breed":"Shiba Inu","status":"bench","imageUrl":"https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=400","createdAt":"2022-12-04T05:08:33.131Z","updatedAt":"2022-12-04T05:08:33.131Z","teamId":532,"cohortId":283},{"id":9990,"name":"Stumpy","breed":"Pug","status":"bench","imageUrl":"https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=400","createdAt":"2022-12-04T05:08:51.495Z","updatedAt":"2022-12-04T05:08:51.495Z","teamId":532,"cohortId":283}
]

const Main = () => {
    return (
        <div>
        <h1> Welcome to Puppy Bowl'</h1>
        <AllPuppies puppy ={puppies[0]}/>
        <AllPuppies puppy ={puppies[1]}/>
        <AllPuppies puppy ={puppies[2]}/>
        <AllPuppies puppy ={puppies[3]}/>



        </div>
    );
};

export default Main;
