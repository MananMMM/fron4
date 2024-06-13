import React from 'react';
import Song from './Song';

const Playlist = ({ items, onMoveDown,onDelete}) => {
  return (
    <div className="Playlist">
      <h2>Playlist</h2>
      <h4>Songs: {items.length}</h4>
      {
        items.map(elm => (
          <Song
            key={elm.id}
            {...elm}
            inPlaylist={true}
            onMoveDown={onMoveDown}
            onDelete={onDelete}
          />
        ))
      }
    </div>
  );
};

export default Playlist;