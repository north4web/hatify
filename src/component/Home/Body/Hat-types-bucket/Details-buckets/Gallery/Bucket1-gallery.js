import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";



class Bucket1Gallery extends React.Component {
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
              original: 'https://az2.hatstoremedia.com/hatstore/images/828432257102_1/652/522/0/cooperman-woodland-camo-bucket-herschel.jpg',
              thumbnail: 'https://az2.hatstoremedia.com/hatstore/images/828432257102_1/652/522/0/cooperman-woodland-camo-bucket-herschel.jpg',
            },
            {
              original: 'https://az1.hatstoremedia.com/hatstore/images/828432257102_4/652/522/0/cooperman-woodland-camo-bucket-herschel.jpg',
              thumbnail: 'https://az1.hatstoremedia.com/hatstore/images/828432257102_4/652/522/0/cooperman-woodland-camo-bucket-herschel.jpg',
            },
          ]

        })} />
        </div>);
  }
}
export default Bucket1Gallery;