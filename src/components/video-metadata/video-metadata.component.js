import React from 'react';
import { Button, Divider, Icon } from 'semantic-ui-react';
import {Rating} from '../rating/rating.component';
import './video-metadata.styles.scss';

export function VideoMetadata(props) {
	const viewcount = Number(props.viewcount).toLocaleString() || '';
	return(
		<div className='video-metadata'>
		 <h3> Video title</h3>
		 <div className='video-stats'>
		   <span>{viewcount} views</span>
		   <div className='video-actions'>
		    <Rating likeCount={1000} dislikeCount={100} />
		     <Button basic icon labelPosition='left'>
		       <Icon name='share'/>
		        share
		        </Button>
		        <Button basic icon>
              <Icon name='add circle' />
             </Button>
             <Button basic icon>
            <Icon name='ellipsis horizontal' />
          </Button>
		   </div>
		 </div>
		<Divider/>	
		</div>
	);
}