import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";



class Bucket9Gallery extends React.Component {
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
              original: 'https://az2.hatstoremedia.com/hatstore/images/ob1001934_1/652/522/0/white-logo-black-bucket-fair-c.jpg',
              thumbnail: 'https://az2.hatstoremedia.com/hatstore/images/ob1001934_1/652/522/0/white-logo-black-bucket-fair-c.jpg',
            },
            {
              original: 'https://az1.hatstoremedia.com/hatstore/images/ob1001934_4/652/522/0/white-logo-black-bucket-fair-i.jpg',
              thumbnail: 'https://az1.hatstoremedia.com/hatstore/images/ob1001934_4/652/522/0/white-logo-black-bucket-fair-i.jpg',
            },
          ]

        })} />
        </div>);
  }
}
export default Bucket9Gallery;