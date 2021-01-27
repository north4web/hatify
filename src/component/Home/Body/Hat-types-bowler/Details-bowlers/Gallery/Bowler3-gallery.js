import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

class Bowler3Gallery extends React.Component {
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
              original: 'https://az1.hatstoremedia.com/hatstore/images/4063633032042_1/652/522/0/sonstige-bogart-open-crown-woolfelt-black-bowler-stetson.jpg',
              thumbnail: 'https://az1.hatstoremedia.com/hatstore/images/4063633032042_1/652/522/0/sonstige-bogart-open-crown-woolfelt-black-bowler-stetson.jpg',
            },
            {
              original: 'https://az1.hatstoremedia.com/hatstore/images/4063633032042_4/652/522/0/sonstige-bogart-open-crown-woolfelt-black-bowler-stetson.jpg',
              thumbnail: 'https://az1.hatstoremedia.com/hatstore/images/4063633032042_4/652/522/0/sonstige-bogart-open-crown-woolfelt-black-bowler-stetson.jpg',
            },
          ]

        })} />
    </div>);
  }
}
export default Bowler3Gallery;