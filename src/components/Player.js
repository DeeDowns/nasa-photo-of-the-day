import React from 'react'
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const StyledPlayer = styled.div `
  position: relative;
  padding-top: 56.25%;

  .react-player {
  position: absolute;
  top: 0;
  left: 0;
}

`

const Player = ({url}) => {
  
    return (
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url={url}
          width='640px'
          height='360px'
          controls={true}
          loop={true}
        />
      </div>
    )

}

export default Player