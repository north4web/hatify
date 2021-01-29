import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

class Beret3Gallery extends React.Component {
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
                            original: '../images/berets/b3.jpg',
                            thumbnail: '../images/berets/b3.jpg',
                        },
                        {
                            original: '../images/berets/b3a.jpg',
                            thumbnail: '../images/berets/b3a.jpg',
                        },
                    ]

                })} />
        </div>);
    }
}
export default Beret3Gallery;