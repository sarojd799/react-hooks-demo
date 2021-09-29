import React, { useState } from 'react';
import { gameConfigs, drawSnake, updateSnake } from './snake.utils'
import '../index.css'

function SnakeGame(props) {

    const grids = Array(100).fill(1); //10 * 10 grid
    const config = { ...gameConfigs }
    const [score, setScore] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);


    const endGame = function () {

    }

    const startGame = function () {
        //const speed = prompt('Enter difficulty level 1-5');
        if (config.interval) {
            clearInterval(config.interval);
        }
        updateSnake(config);
        drawSnake(config)
    }

    const updateGame = function (direction) {
        if (config.interval) clearInterval(config.interval)

        return setInterval(() => {
            config.direction = direction
            updateSnake(config, direction);
            drawSnake(config)
        }, config.intervalTime)
    }

    /*===============HANDLER================== */
    const keyUpListener = function (e = {}) {
        if (e.key === "ArrowLeft") {
            config.interval = updateGame('L')
        } else if (e.key === "ArrowRight") {
            config.interval = updateGame('R')
        } else if (e.key === "ArrowUp") {
            config.interval = updateGame('U')
        } else if (e.key === "ArrowDown") {
            config.interval = updateGame('D')
        } else if (e.key === 'Enter') {
            (gameStarted) ? endGame() : startGame()
        }
    }
    /*===============HANDLER===================*/

    return (
        <div className="snake-game-container">
            <p>
                <span className="game-header">
                    SNAKE&nbsp;
                </span>
                <label className="score-label">
                    score: <span id="score">{score}</span>
                </label>
            </p>
            <div id="snake-board" title="press enter to start the game" tabIndex="0" onKeyUp={e => keyUpListener(e)}>
                {grids.map((cell, i) => (<div key={`cell-${i}`}></div>))}
            </div>
        </div>
    );
}

export default SnakeGame;