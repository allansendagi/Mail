import React from 'react';
import { VideoPreview } from '../video-preview/video-preview.component.js';
import './related-videos.styles.scss';
import {NextUpVideo} from './nextup-video/nextup-video.component';

export function RelatedVideos(props) {
	 return (
	 <div className='related-videos'>
	 	<NextUpVideo />
		<VideoPreview horizontal={true}/>
		<VideoPreview horizontal={true}/>
		<VideoPreview horizontal={true}/>
	 </div>
	)
}