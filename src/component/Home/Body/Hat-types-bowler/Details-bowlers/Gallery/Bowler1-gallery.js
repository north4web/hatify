import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";



class Bowler1Gallery extends React.Component {
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
              original: 'https://az2.hatstoremedia.com/hatstore/images/4063633006593_1/652/522/0/bogart-open-crown-woolfelt-beige-bowler-stetson.jpg',
              thumbnail: 'https://az2.hatstoremedia.com/hatstore/images/4063633006593_1/652/522/0/bogart-open-crown-woolfelt-beige-bowler-stetson.jpg',
            },
            {
              original: 'https://az1.hatstoremedia.com/hatstore/images/4063633006593_4/652/522/0/bogart-open-crown-woolfelt-beige-bowler-stetson.jpg',
              thumbnail: 'https://az1.hatstoremedia.com/hatstore/images/4063633006593_4/652/522/0/bogart-open-crown-woolfelt-beige-bowler-stetson.jpg',
            },
          ]

        })} />
        </div>);
  }
}
export default Bowler1Gallery;