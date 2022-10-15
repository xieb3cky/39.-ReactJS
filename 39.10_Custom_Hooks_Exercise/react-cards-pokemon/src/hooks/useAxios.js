import { useState } from "react";
import uuid from "uuid";
import Axios from "axios";

const useAxios = (url) => {
    const [cards, setCards] = useState([]);
    const addCard = async (name) => {
        if (typeof (name) == "string") {
            url = url + name + "/";
        }
        const res = await Axios.get(url)
        setCards(data => [...data, { ...res.data, id: uuid() }])
    };
    const clear = () => {
        setCards([]);
    }
    return [cards, addCard, clear];
};
// const useAxios = (url) => {
//     const [response, setResponse] = useState([]);
//     const [error, setError] = useState(null);

//     const respData = async (name) => {
//         try {
//             const res = await useAxios.length(url);
//             setResponse(data => [...data, { ...res.data, id: uuid() }])
//         } catch (error) {
//             setError(error);
//         }
//     };
//     respData();
//     return [response, error];
// };

export default useAxios;