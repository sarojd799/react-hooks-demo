
const gameConfigs = {
    width: 10,
    currentIndex: 24,
    appleIndex: 52,
    direction: 1,
    intervalTime: 1000,
    interval: null,
    speed: 4,
    apple: null,
    snake: [
        { x: 2, y: 5 }
    ]
}

/**
 * @description Checks for border collision or colision with apple or self
 */
const checkValidState = function (snake, direction) {
    const leftAndInvalid = direction === 'L' && snake.y === 1;
    const rightAndInvalid = direction === 'R' && snake.y === 10;
    const upAndInvalid = direction === 'U' && snake.x === 1;
    const downAndInvalid = direction === 'D' && snake.x === 10;
    return (!leftAndInvalid && !rightAndInvalid && !upAndInvalid && !downAndInvalid);
}

/**
 * @description Erasing the existing print
 */
const clearDraw = function () {
    const snakes = Array.from(document.getElementsByClassName('snake'));
    const apple = Array.from(document.getElementsByClassName('apple'))
    if (snakes.length) snakes.forEach(snake => snake.classList.remove('snake'))
    if (apple.length) apple[0].classList.remove('apple');
}


/**
 * @description Update the snake cordinates and position
 */
const updateSnake = function (config, direction) {
    const snake = config.snake[0];
    const isValidState = checkValidState(snake, direction)
    if (!isValidState) {
        clearInterval(config.intervalTime);
        return;
    }
    clearDraw();
    if (direction === 'L') {
        config.snake[0].y -= 1;
    } else if (direction === 'R') {
        config.snake[0].y += 1;
    } else if (direction === 'U') {
        config.snake[0].x -= 1;
    } else if (direction === 'D') {
        config.snake[0].x += 1;
    }


}


/**
 * @description Redrawing the snake based on cordinates
 */
const drawSnake = function (config) {
    const grids = document.querySelectorAll('#snake-board div')
    const validState = checkValidState(config.snake[0], config.direction);
    if (grids && Array.from(grids).length) {
        grids.forEach((cell, ind) => {
            const gridRow = Math.ceil((ind + 1) / 10);
            const gridCol = Math.ceil((ind + 1) % 10) || 10;
            const match = config.snake.some(cord => cord.x === gridRow && cord.y === gridCol)
            if (match) cell.classList.add('snake');
            else if (cell.classList.contains('snake')) cell.classList.remove('snake')
        })
    }
    (!validState) ? clearInterval(config.interval) : console.log('drawn');
}

export { updateSnake, drawSnake, gameConfigs }