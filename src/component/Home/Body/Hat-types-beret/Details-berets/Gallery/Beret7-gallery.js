import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

class Beret7Gallery extends React.Component {
    render() {
        return (<div >
            <ImageGallery {... (
                {
                    thumbnailPosition: "left",
                    useBrowserFullscreen: true,
                    showPlayButton: true,
                    showIndex: true,
                    height: "400px",
                    width: "400px",


                    items: [
                        {
                            original: '../images/berets/b7.jpg',
                            thumbnail: '../images/berets/b7.jpg',
                        },
                        {
                            original: '../images/berets/b7a.jpg',
                            thumbnail: '../images/berets/b7a.jpg',
                        },
                    ]

                })} />
        </div>);
    }
}
export default Beret7Gallery;