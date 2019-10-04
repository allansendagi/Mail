import React from 'react';
import './rating.styles.scss';
import {Icon, Progress} from 'semantic-ui-react';

export function Rating(props) {

	let progress = null;
	if (props.likeCount && props.dislikeCount) {
		const percent =100 * (props.likeCount / (props.likeCount + props.dislikeCount));
		Progress = <progress className='progress' percent={percent} size='tiny' />;
	}

	return(
		<div className='rating'>
		  <div className='thumbs-up'>
		  	<Icon name='thumbs outline up' />
		  	 <span>{props.likeCount}</span>
		  </div>
		  <div className='thumbs-down'>
		   <Icon name='thumbs outline down' />
		   <span>{props.dislikeCount}</span>	
		  </div>
		  {Progress}	
		</div>
	)
}