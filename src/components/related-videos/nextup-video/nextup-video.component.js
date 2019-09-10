import React from 'react';
import './nextup.styles.scss';
import { Checkbox, Divider } from 'semantic-ui-react';
import { VideoPreview } from '../../video-preview/video-preview.component';

export function NextUpVideo(props) {
	return (
		<React.Fragment>
		 <div className='next-up-container'>
          <h4>Up next</h4>
          <div className='up-next-toggle'>
            <span>Autoplay</span>
            <Checkbox toggle defaultChecked/>
          </div>
	      </div>
	      <VideoPreview horizontal={true}/>
	      <Divider/>
		</React.Fragment>
	)
}