import {useState,useEffect} from "react";
import getGifs from "../services/getGifs";

export default function useGifs({ keyword }) {

    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([]);

    useEffect(function () {
        setLoading(true)
        getGifs({ keyword} )
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
            })
    }, [keyword])

    return {loading,gifs}

}