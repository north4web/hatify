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
                            original: 'https://az2.hatstoremedia.com/hatstore/images/792179724268_1/652/522/0/wool-jax-dk-lichen-green-beret-kangol.jpg',
                            thumbnail: 'https://az2.hatstoremedia.com/hatstore/images/792179724268_1/90/90/0/wool-jax-dk-lichen-green-beret-kangol.jpg',
                        },
                        {
                            original: 'https://az1.hatstoremedia.com/hatstore/images/792179724268_4/652/522/0/wool-jax-dk-lichen-green-beret-kangol.jpg',
                            thumbnail: 'https://az1.hatstoremedia.com/hatstore/images/792179724268_4/90/90/0/wool-jax-dk-lichen-green-beret-kangol.jpg',
                        },
                    ]

                })} />
        </div>);
    }
}
export default Beret3Gallery;