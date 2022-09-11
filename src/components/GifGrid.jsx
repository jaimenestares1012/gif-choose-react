
import { useState, useEffect } from "react"
import { useFetchGifs } from "../hooks/useFetchGifs"

import { GiftGridItem } from "./GiftGridItem"

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category)
    console.log("prueba hooks");
    console.log({ images, isLoading });



    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando</h2>)
            }
            <h2></h2>
            <div className="card-grid">
                {
                    images.map(image => (
                        <GiftGridItem key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}
