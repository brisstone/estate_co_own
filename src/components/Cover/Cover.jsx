import React from 'react'
import './Cover.scss'

export default function Cover(props) {

    const {title, content, width} = props
  return (
    <div className="cover_wrapper">
      <div className="cover_title">{title}</div>
      <div className="cover_content" style={{ maxWidth: width && width }}>
        {content}
      </div>
    </div>
  );
}
