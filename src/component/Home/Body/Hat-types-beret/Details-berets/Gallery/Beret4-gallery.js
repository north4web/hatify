import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

class Beret4Gallery extends React.Component {
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
                            original: 'https://az1.hatstoremedia.com/hatstore/images/888588505915_2/652/522/0/audrey-amber-beret-brixton.jpg',
                            thumbnail: 'https://az1.hatstoremedia.com/hatstore/images/888588505915_2/90/90/0/audrey-amber-beret-brixton.jpg',
                        },
                        {
                            original: 'https://az1.hatstoremedia.com/hatstore/images/888588505915_4/652/522/0/audrey-amber-beret-brixton.jpg',
                            thumbnail: 'https://az1.hatstoremedia.com/hatstore/images/888588505915_4/90/90/0/audrey-amber-beret-brixton.jpg',
                        },
                    ]

                })} />
        </div>);
    }
}
export default Beret4Gallery;