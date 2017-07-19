import React from 'react'
import VideoListItem from './preview_list_item'

const VideoList = ({videos, onVideoSelect}) => (
  <ul className="col-md-4 list-group">
    {
      videos.map((video) => (
          <VideoListItem
            onVideoSelect={onVideoSelect}
            key={video.etag}
            video={video}/>
      ))
    }
  </ul>
)

export default VideoList
