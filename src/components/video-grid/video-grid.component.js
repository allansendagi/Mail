import React from 'react';
import './video-grid.styles.scss';
import {VideoGridHeader} from './video-grid-header/video-grid-header.component';
import {Divider} from 'semantic-ui-react';
import {VideoPreview} from '../video-preview/video-preview.component';

export function VideoGrid(props) {
	const divider = props.hideDivider ? null : <Divider/>;

	return (
		<React.Fragment>
		 <div className='video-section'>
		   <VideoGridHeader title='Trending'/>
		    <div className='video-grid'>
		    <div className='video-grid'>
		    <VideoPreview/>
	        <VideoPreview/>
	        <VideoPreview/>
	        <VideoPreview/>
	        <VideoPreview/>
	        <VideoPreview/>
	        <VideoPreview/>
	        <VideoPreview/>
	        <VideoPreview/>
	        <VideoPreview/>
	        <VideoPreview/>
	        <VideoPreview/>
		  </div>
		  </div>
		  </div>
		  {divider}
		</React.Fragment>
	);
}
	
