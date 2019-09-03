import React from 'react';
import './video-grid-header.styles.scss';

export function VideoGridHeader(props) {
  return (
    <div className='video-grid-header'>
      <span className='title'>{props.title}</span>
    </div>
  );
}