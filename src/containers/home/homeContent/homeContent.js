import React from 'react';
import {VideoGrid} from '../../../components/video-grid/video-grid.component';
import './homeContent.scss';


export class HomeContent extends React.Component {
  render() {
    return (
      <div className='home-content'>
        <div className="responsive-video-grid-container">
          <VideoGrid title='Trending'/>
          <VideoGrid title='Autos & Vehicles' hideDivider={true}/>
        </div>
      </div>
    );
  }
}