import React from 'react';
import {VideoPreview} from '../../components/video-preview/video-preview.component';
import './home.styles.scss';

export class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <VideoPreview />
      </div>
    );
  }
}