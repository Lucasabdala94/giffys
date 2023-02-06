import { useState, useEffect } from "react";
import getGifs from "../services/getGifs";

export default function useGifs({ keyword } = { keyword: 'randon' }) {

    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([]);

    useEffect(function () {
        setLoading(true)
        const keywordToUse = keyword || localStorage.getItem('lastkeyword') || 'randon'
        getGifs({ keyword: keywordToUse })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                localStorage.setItem('lastkeyword', keyword)
            })
    }, [keyword])

    return { loading, gifs }

}