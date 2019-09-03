import React from 'react';
import {VideoGrid} from '../../components/video-grid/video-grid.component';
import SideBar from '../sidebar/sidebar.component';
import './home.styles.scss';

export class Home extends React.Component {
  render() {
    return (
    <React.Fragment>
     <SideBar/>
      <div className='home'>
        <div className="responsive-video-grid-container">
      	<VideoGrid title='Trending'/>
      	<VideoGrid title='Autos & vehicles' hideDivider={true}/>
      </div>
      </div>
    </React.Fragment>
    );
  }
}