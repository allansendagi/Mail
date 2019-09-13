import React from 'react';
import {RelatedVideos} from '../../components/related-videos/related-videos.component';
import {Video} from '../../components/video/video.component';
import {VideoMetadata} from '../../components/video-metadata/video-metadata.component';
import { VideoInfoBox } from '../../components/video-infobox/video-infobox.component'
import './watch.styles.scss';

export class Watch extends React.Component {
	render() {
		return (
			<div className='watch-grid'>
			  <Video className='video' id='-7fuHEEmEjs'/>
			  <VideoMetadata className='metadata' viewCount={1000}/>
			  <VideoInfoBox className='video-info-box'/>
			  <div className='video-info-box' style={{width: '100%', height: '100px', background: '#BD10E0'}}>Video Info box</div>
			  <div className='comments' style={{width: '100%', height: '100px', background: '#9013FE'}}>comments</div>
			  <RelatedVideos className='relatedVideos'/>
			</div>
		)
	}
}