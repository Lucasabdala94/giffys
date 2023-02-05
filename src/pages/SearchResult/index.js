import { RotatingLines } from 'react-loader-spinner';
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import useGifs from "../../hooks/useGifs";

export default function SearchResults({ params }) {
    const { keyword } = params

    const {loading,gifs}=useGifs({keyword})

    return (
        <>
            {loading
                ? <RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={true}
                />
                : <ListOfGifs gifs={gifs} />
            }
        </>
    )
}