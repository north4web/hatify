import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";



class Bucket2Gallery extends React.Component {
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
              original: 'https://az2.hatstoremedia.com/hatstore/images/193650915784_1/652/522/0/gore-tex-black-white-bucket-new-era.jpg',
              thumbnail: 'https://az2.hatstoremedia.com/hatstore/images/193650915784_1/652/522/0/gore-tex-black-white-bucket-new-era.jpg',

            },
            {
              original: 'https://az1.hatstoremedia.com/hatstore/images/193650915784_4/652/522/0/gore-tex-black-white-bucket-new-era.jpg',
              thumbnail: 'https://az1.hatstoremedia.com/hatstore/images/193650915784_4/652/522/0/gore-tex-black-white-bucket-new-era.jpg',
            },
          ]

        })} />
        </div>);
  }
}
export default Bucket2Gallery;