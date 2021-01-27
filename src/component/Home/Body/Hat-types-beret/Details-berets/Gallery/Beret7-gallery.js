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
                            original: 'https://az1.hatstoremedia.com/hatstore/images/4062845099010_1/652/522/0/wool-blend-heather-grey-beret-seeberger.jpg',
                            thumbnail: 'https://az1.hatstoremedia.com/hatstore/images/4062845099010_1/90/90/0/wool-blend-heather-grey-beret-seeberger.jpg',
                        },
                        {
                            original: 'https://az1.hatstoremedia.com/hatstore/images/4062845099010_4/652/522/0/wool-blend-heather-grey-beret-seeberger.jpg',
                            thumbnail: 'https://az1.hatstoremedia.com/hatstore/images/4062845099010_4/90/90/0/wool-blend-heather-grey-beret-seeberger.jpg',
                        },
                    ]

                })} />
        </div>);
    }
}
export default Beret7Gallery;