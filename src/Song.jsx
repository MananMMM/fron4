import React from 'react';
export const Song = ({ title, artist, duration = 4, id, onDelete, onMove, inPlaylist, onMoveDown }) => {
    return (
      <div className="Song">
        <p>{title}</p>
        <strong>by {artist}</strong>
        <small>{duration} mins</small>
        <button onClick={() => onDelete(id)}>Delete</button>
        {!inPlaylist && <button onClick={() => onMove(id)}>Move</button>}
        {inPlaylist && <button onClick={() => onMoveDown(id)}>Move Down</button>}
      </div>
    );
  };

  export default Song