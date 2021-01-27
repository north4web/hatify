import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

class Beret5Gallery extends React.Component {
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
                            original: 'https://az2.hatstoremedia.com/hatstore/images/8717457704819_2/652/522/0/leconte-heather-grey-beret-barts.jpg',
                            thumbnail: 'https://az2.hatstoremedia.com/hatstore/images/8717457704819_2/90/90/0/leconte-heather-grey-beret-barts.jpg',
                        },
                        {
                            original: 'https://az1.hatstoremedia.com/hatstore/images/8717457704819_4/652/522/0/leconte-heather-grey-beret-barts.jpg',
                            thumbnail: 'https://az1.hatstoremedia.com/hatstore/images/8717457704819_4/90/90/0/leconte-heather-grey-beret-barts.jpg',
                        },
                    ]

                })} />
        </div>);
    }
}
export default Beret5Gallery;