import React, { PureComponent } from 'react';
import videoFile from './Video.mp4';
import './VideoPlayer.css';

class VideoPlayer extends PureComponent {
  constructor(props){
    super(props);
    this.videoElem = React.createRef();
  }
  
  static displayName = 'VideoPlayer';
  handleStart = evt => {
    this.videoElem.current.play();
  }

  handleStop = evt => {
    this.videoElem.current.pause();
  }
   
  render() {
    return <div className="video-player">
      <video ref={this.videoElem} className="video-player__source">
        <source src={videoFile} type='video/mp4' />
      </video>
      <div className="video-controls">
        <button onClick={this.handleStart}>Play</button>  
        <button onClick={this.handleStop}>Stop</button>  
      </div>
    </div>;
  }
}

export default VideoPlayer;
