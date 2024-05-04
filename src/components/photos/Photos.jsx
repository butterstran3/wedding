import { React, useState } from "react";
import "./photos.css";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import IMG1 from "../../assets/gallery/IMG_1.JPG";
import IMG2 from "../../assets/gallery/IMG_2.JPG";
import IMG3 from "../../assets/gallery/IMG_3.JPG";
import IMG4 from "../../assets/gallery/IMG_4.JPG";
import IMG5 from "../../assets/gallery/IMG_5.JPG";
import IMG6 from "../../assets/gallery/IMG_6.JPG";
import IMG7 from "../../assets/gallery/IMG_7.JPG";
import IMG8 from "../../assets/gallery/IMG_8.JPG";
import IMG9 from "../../assets/gallery/IMG_9.JPG";
import IMG10 from "../../assets/gallery/IMG_10.JPG";
import IMG11 from "../../assets/gallery/IMG_11.JPG";
import IMG12 from "../../assets/gallery/IMG_12.JPG";
import IMG13 from "../../assets/gallery/IMG_13.JPG";
import IMG14 from "../../assets/gallery/IMG_14.JPG";
import IMG15 from "../../assets/gallery/IMG_15.JPG";
import IMG16 from "../../assets/gallery/IMG_16.JPG";
import IMG17 from "../../assets/gallery/IMG_17.JPG";
import IMG18 from "../../assets/gallery/IMG_18.JPG";
import IMG19 from "../../assets/gallery/IMG_19.JPG";
import IMG20 from "../../assets/gallery/IMG_20.JPG";
import IMG21 from "../../assets/gallery/IMG_21.JPG";
import IMG22 from "../../assets/gallery/IMG_22.JPG";
import IMG23 from "../../assets/gallery/IMG_23.JPG";
import IMG24 from "../../assets/gallery/IMG_24.JPG";
import IMG25 from "../../assets/gallery/IMG_25.JPG";
import IMG26 from "../../assets/gallery/IMG_26.JPG";
import IMG27 from "../../assets/gallery/IMG_27.JPG";
import IMG28 from "../../assets/gallery/IMG_28.JPG";
import IMG29 from "../../assets/gallery/IMG_29.JPG";

const Photos = () => {

    const [index, setIndex] = useState(-1);

    const slides = [
        {src: IMG1, id: 0},
        {src: IMG2, id: 1},
        {src: IMG3, id: 2},
        {src: IMG4, id: 3},
        {src: IMG5, id: 4},
        {src: IMG6, id: 5},
        {src: IMG7, id: 6},
        {src: IMG8, id: 7},
        {src: IMG9, id: 8},
        {src: IMG10, id: 9},
        {src: IMG11, id: 10},
        {src: IMG12, id: 11},
        {src: IMG13, id: 12},
        {src: IMG14, id: 13},
        {src: IMG15, id: 14},
        {src: IMG16, id: 15},
        {src: IMG17, id: 16},
        {src: IMG18, id: 17},
        {src: IMG19, id: 18},
        {src: IMG20, id: 19},
        {src: IMG21, id: 20},
        {src: IMG22, id: 21},
        {src: IMG23, id: 22},
        {src: IMG24, id: 23},
        {src: IMG25, id: 24},
        {src: IMG26, id: 25},
        {src: IMG27, id: 26},
        {src: IMG28, id: 27},
        {src: IMG29, id: 28}
    ]

    return (
        <div className="photos_container">

            <div className="gallery_container">
                {
                    slides.map(({id, src}) => {
                        return (
                            <article key={id} className="gallery_image" onClick={() => setIndex(id)}>
                                <img src={src}></img>
                            </article>
                        )
                    })
                }
            </div>

            <Lightbox
                index={index}
                open={index >= 0}
                close={() => setIndex(-1)}
                slides={slides}
                plugins={[Thumbnails]}
            />
        </div>
    )
}

export default Photos;