import React from 'react'
import './Playlist.css'
import TrackList from '../TrackList/TackList.js'

class Playlist extends React.Component {
    constructor(props) {
        super(props)
        this.handleNameChange = this.handleNameChange.bind(this)
    }
    render() {
        return (
            <div className="Playlist">
                <input onChange={this.handleNameChange} defaultValue="New Playlist" />
                <TrackList onRemove={this.props.onRemove} isRemoval={true} tracks={this.props.playlistTracks} />
                <button onClick={this.props.onSave} className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
    handleNameChange(e) {
        this.props.onNameChange(e.target.value)
    }
}

export default Playlist