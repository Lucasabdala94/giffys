import React from 'react';

import Gif from "../Gif/Gif"

export default function ListOfGifs({gifs}){
 
    return(
        <>{
            gifs.map(({title,id,url}) => 
                <Gif
                key={id} 
                title={title} 
                url={url} 
                id={id}
                />
            )}
        </>
    )
}