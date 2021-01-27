import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";



class Bucket8Gallery extends React.Component {
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
              original: 'https://az1.hatstoremedia.com/hatstore/images/4052936442634_1/652/522/0/supplex-sun-hat-siltstone-bucket-jack-wolfskin.jpg',
              thumbnail: 'https://az1.hatstoremedia.com/hatstore/images/4052936442634_1/652/522/0/supplex-sun-hat-siltstone-bucket-jack-wolfskin.jpg',
            },
            {
              original: 'https://az1.hatstoremedia.com/hatstore/images/4052936442634_4/652/522/0/supplex-sun-hat-siltstone-bucket-jack-wolfskin.jpg',
              thumbnail: 'https://az1.hatstoremedia.com/hatstore/images/4052936442634_4/652/522/0/supplex-sun-hat-siltstone-bucket-jack-wolfskin.jpg',
            },
          ]

        })} />
        </div>);
  }
}
export default Bucket8Gallery;