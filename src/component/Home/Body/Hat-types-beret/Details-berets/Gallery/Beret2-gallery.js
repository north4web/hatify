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
                            original: 'https://az1.hatstoremedia.com/hatstore/images/4062845099003_3/652/522/0/wool-blend-black-beret-seeberger.jpg',
                            thumbnail: 'https://az1.hatstoremedia.com/hatstore/images/4062845099003_3/90/90/0/wool-blend-black-beret-seeberger.jpg',

                        },
                        {
                            original: 'https://az1.hatstoremedia.com/hatstore/images/4062845099003_4/652/522/0/wool-blend-black-beret-seeberger.jpg',
                            thumbnail: 'https://az1.hatstoremedia.com/hatstore/images/4062845099003_4/90/90/0/wool-blend-black-beret-seeberger.jpg',
                        },
                    ]

                })} />
        </div>);
    }
}
export default Beret2Gallery;