import React, { use } from 'react';
import Player from '../Player/Player';

const Players = ({ fatchPromise }) => {
    const allPlayers = use(fatchPromise);
    // console.log(allPlayers);
    const handleChoosePlayer = (player) =>{
        console.log("Chooce btn clicked",player);
    }
    return (
        <div>
            <div className='grid md:grid-cols-3 gap-4 w-11/12 mx-auto'>
                {
                    allPlayers.map(player => <Player handleChoosePlayer={handleChoosePlayer} key={player.id} player={player}></Player>)
                }
            </div>
        </div>
    );
};

export default Players;