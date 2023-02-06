import React,{useState} from "react";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import { Link,useLocation } from "wouter"
import "./Home.css"
import useGifs from "../../hooks/useGifs";

export default function Home() {
    const POPULAR_GIFS = ["Messi", "Mundial katar", "Argentina"];
    const [keyword,setKeyword]=useState('');
    const [,pushLocation] =useLocation();

    const {loading,gifs}=useGifs();

    const handleChange = (e)=>{
        setKeyword(e.target.value);
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        //realizamos la busqueda.
        pushLocation(`/search/${keyword}`)
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type='text' placeholder="busqueda..." value={keyword} />
                <input type="submit" value="Buscar" />
            </form>
            <h3>Los Gifs más populares</h3>
            <ul className="lista-gifs">
                {POPULAR_GIFS.map((popularGif) => (
                    <li className="gif-populate" key={popularGif}>
                        <Link className="link-populate" to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
                    </li>))
                }
            </ul>
            <h3>Ultima Busqueda...</h3>
            <ListOfGifs gifs={gifs} />
        </>
    )
}