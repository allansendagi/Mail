import React from 'react';
import {VideoPreview} from '../../components/video-preview/video-preview.component';
import './watch.styles.scss';

export class Watch extends React.Component {
	render() {
		return (
			<div style={{maxWidth: '80%'}}>
			  <VideoPreview horizontal={true}/>
			</div>
		)
	}
}