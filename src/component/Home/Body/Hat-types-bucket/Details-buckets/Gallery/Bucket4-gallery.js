import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";



class Bucket4Gallery extends React.Component {
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
              original: 'https://az2.hatstoremedia.com/hatstore/images/888588240403_1/652/522/0/kids-lil-hardy-red-navy-bucket-brixton.jpg',
              thumbnail: 'https://az2.hatstoremedia.com/hatstore/images/888588240403_1/652/522/0/kids-lil-hardy-red-navy-bucket-brixton.jpg',
            },
            {
              original: 'https://az2.hatstoremedia.com/hatstore/images/888588240403_4/652/522/0/kids-lil-hardy-red-navy-bucket-brixton.jpg',
              thumbnail: 'https://az2.hatstoremedia.com/hatstore/images/888588240403_4/652/522/0/kids-lil-hardy-red-navy-bucket-brixton.jpg',
            },
          ]

        })} />
        </div>);
  }
}
export default Bucket4Gallery;