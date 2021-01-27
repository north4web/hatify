import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";



class Bucket3Gallery extends React.Component {
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
              original: 'https://az1.hatstoremedia.com/hatstore/images/5059335248132_1/652/522/0/levan-navy-blue-bucket-ellesse.jpg',
              thumbnail: 'https://az1.hatstoremedia.com/hatstore/images/5059335248132_1/652/522/0/levan-navy-blue-bucket-ellesse.jpg',
            },
            {
              original: 'https://az2.hatstoremedia.com/hatstore/images/5059335248132_4/652/522/0/levan-navy-blue-bucket-ellesse.jpg',
              thumbnail: 'https://az2.hatstoremedia.com/hatstore/images/5059335248132_4/652/522/0/levan-navy-blue-bucket-ellesse.jpg',
            },
          ]

        })} />
        </div>);
  }
}
export default Bucket3Gallery;