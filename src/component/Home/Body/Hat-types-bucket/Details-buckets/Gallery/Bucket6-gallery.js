import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";



class Bucket6Gallery extends React.Component {
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
              original: 'https://az2.hatstoremedia.com/hatstore/images/194789390312_1/652/522/0/none-outdoors-bucket-explorer-olive-bucket-new-era.jpg',
              thumbnail: 'https://az2.hatstoremedia.com/hatstore/images/194789390312_1/652/522/0/none-outdoors-bucket-explorer-olive-bucket-new-era.jpg',
            },
            {
              original: 'https://az2.hatstoremedia.com/hatstore/images/194789390312_4/652/522/0/none-outdoors-bucket-explorer-olive-bucket-new-era.jpg',
              thumbnail: 'https://az2.hatstoremedia.com/hatstore/images/194789390312_4/652/522/0/none-outdoors-bucket-explorer-olive-bucket-new-era.jpg',
            },
          ]

        })} />
        </div>);
  }
}
export default Bucket6Gallery;