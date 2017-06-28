import React from 'react'
import VideoListItem from './preview_list_item'

const VideoList = ({videos}) => (
  <ul className="col-md-4 list-group">
    {
      videos.map((video) => (
          <VideoListItem key={video.etag} video={video}/>
      ))
    }
  </ul>
)

export default VideoList
