import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";


class Beret2Gallery extends React.Component {
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
                            original: '../images/berets/b2.jpg',
                            thumbnail: '../images/berets/b2.jpg',

                        },
                        {
                            original: '../images/berets/b2a.jpg',
                            thumbnail: '../images/berets/b2a.jpg',
                        },
                    ]

                })} />
        </div>);
    }
}
export default Beret2Gallery;