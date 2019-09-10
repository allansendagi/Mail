import React from 'react';
import {RelatedVideos} from '../../components/related-videos/related-videos.component';
import './watch.styles.scss';

export class Watch extends React.Component {
	render() {
		return (
			<div style={{maxWidth: '80%'}}>
			  <RelatedVideos/>
			</div>
		)
	}
}