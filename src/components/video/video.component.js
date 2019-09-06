import React from 'react';
import './video.styles.scss';

const BASE_EMBED_URL = 'https://www.youtube.com/embed/';

export function Video(props) {
	if (!props.id) {
		return null;
	}
	const embedUrl = `${BASE_EMBED_URL}${props.id}`;
	// const embedUrl = `${BASE_EMBED_URL}${props.id}?autoplay=1`;

	return (
		<div className='video-container'>
		 <div className='video'>
			<iframe className='video-player' src={embedUrl} frameborder="0"
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title={'video'}></iframe>
		 </div>
		</div>
	);
}