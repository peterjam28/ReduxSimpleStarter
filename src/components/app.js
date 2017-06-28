import React, { Component } from 'react'
import YTSearch from 'youtube-api-search'

import SearchBar from './search_bar'
import VideoList from './preview_list'

const API_KEY = 'AIzaSyD6qmg6TatBfHT0sEhi9Pd8z2yjpbOHjO0'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { videos: []}

    YTSearch({key: API_KEY, term: 'surfboards'}, videos => {
      this.setState({videos})
    })
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

export default App
