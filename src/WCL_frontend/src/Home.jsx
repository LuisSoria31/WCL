import React, { useEffect } from 'react';
import { useState } from 'react';
import { useRestActor } from "@bundly/ic-react";

export const Home = () => {
    useEffect(() => {
        getDatos()
    }, [])

    const bnd = useRestActor("backend");
    const [users, setDatos] = useState([]);

    const getDatos = async () => {
        try {
            const res = await bnd.get("/users");
            console.log(res.data)
            setDatos(res.data)
        } catch (error) {
            console.log("Error", error)
        }
    }
    return (
        <>
            <center>
            <div>Datos</div>
            {
                users.map((obj)=>(
                    <li>{obj.name}</li>
                ))
            }
            </center>
        </>
    )
}