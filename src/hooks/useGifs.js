import { useState, useEffect, useContext } from "react";
import getGifs from "../services/getGifs";
import GifsContext from "../context/GifsContext"

export default function useGifs({ keyword } = { keyword:null}) {
    const {gifs,setGifs}= useContext(GifsContext)
    const [loading, setLoading] = useState(false)

    useEffect(function () {
        setLoading(true)
        const keywordToUse = keyword || localStorage.getItem('lastkeyword') || 'randon'
        getGifs( { keyword:keywordToUse})
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                localStorage.setItem('lastkeyword', keyword)
            })
    }, [keyword,setGifs])

    return { loading, gifs }

}