import { Server } from 'azle';
import express from "express";

export default Server(() => {
    const app = express();
    app.use(express.json());

    app.get('/datos', (req, res) => {
        const datos = [
            {
                dato:"PH: " ,
                numero: 25
            },
            {
                dato:"Alcalinidad: ",
                numero: 22
            },
            {
                dato:"Puresa: ",
                numero: 24
            },
        ];
        return res.status(200).json(datos)
    })

    return app.listen();
})