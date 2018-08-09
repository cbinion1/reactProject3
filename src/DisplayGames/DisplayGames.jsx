import React from 'react';

const DisplayGames = (props) => {
    const gamesList = props.displayGames.map((game, i) => {
        return (
            <li key={i}>{game.data.name}</li>
        )
    })
    return (
        <div>
            <h1>Search Results</h1>
            <ul>
                {gamesList}
            </ul>
        </div>
    )
}

export default DisplayGames;