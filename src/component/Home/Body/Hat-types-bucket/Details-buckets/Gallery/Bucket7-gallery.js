import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";



class Bucket7Gallery extends React.Component {
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
              original: 'https://az1.hatstoremedia.com/hatstore/images/888757859030_1/652/522/0/reversible-bucket-patch-plaid-rose-maroon-bucket-converse.jpg',
              thumbnail: 'https://az1.hatstoremedia.com/hatstore/images/888757859030_1/652/522/0/reversible-bucket-patch-plaid-rose-maroon-bucket-converse.jpg',
            },
            {
              original: 'https://az2.hatstoremedia.com/hatstore/images/888757859030_5/652/522/0/reversible-bucket-patch-plaid-rose-maroon-bucket-converse.jpg',
              thumbnail: 'https://az2.hatstoremedia.com/hatstore/images/888757859030_5/652/522/0/reversible-bucket-patch-plaid-rose-maroon-bucket-converse.jpg',
            },
          ]

        })} />
    </div>);
  }
}
export default Bucket7Gallery;