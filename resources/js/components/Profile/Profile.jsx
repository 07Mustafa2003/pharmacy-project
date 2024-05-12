import React, { useState, useEffect } from "react";
const Profle = () => {
    //  state to store  user data 
    const [user, setUser] = useState(null);
    //  function to fetch user data 

    const fetchUserData = async () => {
        try {
            // make an API request to fetch user data 
            const response = await fetch('http://localhost:8000/user/profile');
            if (!response.ok) {
                throw new Error(' Failed to fetch data')
            }
            const userData = await response.json();
            setUser(userData);

        }
        catch (error) {
            console.error(error)

        }

    };


    useEffect(() => {
        fetchUserData();

    }, []);




    return (
        <div className="">
            (user ?(
            <>
                <h2>
                    welcome , {user.name}
                </h2>
                <p>Email :{user.email} </p>

            </>
            )):(<p> loawding user data ...</p> )

        </div>
    )

}