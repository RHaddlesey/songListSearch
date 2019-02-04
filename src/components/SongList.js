import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
	renderList() {
		return this.props.songs.map(song => {
			return (
				<div className="item" key={song.title}>
					<div className="right floated content">
						<button className="ui button primary" onClick={() => this.props.selectSong(song)}>
							Select
						</button>
					</div>
					<div className="content">{song.title}</div>
				</div>
			);
		});
	}

	render() {
		return <div className="ui divided list">{this.renderList()}</div>;
	}
}

const mapStateToProps = state => {
	return { songs: state.songs };
};

export default connect(
	mapStateToProps,
	{ selectSong }
)(SongList);

// connect() is the 'connect function' then the 2nd ()
// invokes the function within that function.

// to connect to and get data from our redux store, we always use this scenario
// we always import connect at the top
// we always call connect and pass in our component as the 2nd function call
// we are always going to define mapStateToProps which will always
// get a first argument of state. And we are always going to return an object
// that will show up as props inside of our component

// mapStatetoProps takes the state in the store and run some
// computation on it so it then maps to props instead.
// so it changes from being changable to not changable
// (state) brings in all the state!
// so we get the state of songs and return it as a props
// then we can call the state as props in the class function
// this.props === {songs: state.songs}

// we can then import the selectSong action and pass it into
// the connection function as the 2nd argument to the first function.
// this brings that in as props and adds it to the render call.
