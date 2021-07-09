import React, {useContext} from "react"
import {getClass} from "../utils"
import Image from "../components/Image"
import {Context} from "../Context"

function Photos() {
    const {allPhotos} = useContext(Context)
    console.log(allPhotos)

    const imageElements = allPhotos.map((img, i) => (
        <Image key={img.id} img={img} className={getClass(i)} />
    ))






    return (
        <main className="photos">
            <h1>Images go here</h1>
        </main>
    )
}

export default Photos