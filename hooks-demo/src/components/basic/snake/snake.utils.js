
const gameConfigs = {
    width: 10,
    currentIndex: 24,
    appleIndex: 52,
    direction: 1,
    intervalTime: 1000,
    interval: null,
    speed: 1,
    snake: [
        { x: 2, y: 5 }
    ]
}

const clearDraw = function () {
    const snakes = Array.from(document.getElementsByClassName('snake'));
    const apple = Array.from(document.getElementsByClassName('apple'))
    //Removing existing paint if any
    if (snakes.length) snakes.forEach(snake => snake.classList.remove('snake'))
    if (apple.length) apple[0].classList.remove('apple');
}

const updateSnake = function (config, direction) {
    const snake = config.snake[0];
    console.log({ snake }) //x is index [0,9] y [1, 10] is position
    const leftAndInvalid = direction === 'L' && snake.y === 1;
    const rightAndInvalid = direction === 'R' && snake.y === 10;
    const upAndInvalid = direction === 'U' && snake.x === 0;
    const downAndInvalid = direction === 'D' && snake.x === 9;

    if (!leftAndInvalid || !rightAndInvalid || !upAndInvalid || !downAndInvalid) {
        clearDraw();
    } else {
        clearInterval(config.interval);
        return;
    }

    if (direction === 'L' && config.snake[0].y > 1) {
        config.snake[0].y -= 1;
    } else if (direction === 'R' && config.snake[0].y < 10) {
        config.snake[0].y += 1;
    } else if (direction === 'U' && config.snake[0].x > 0) {
        config.snake[0].x -= 1;
    } else if (direction === 'D' && config.snake[0].x < 9) {
        config.snake[0].x += 1;
    }
}

const drawSnake = function (config) {
    const grids = document.querySelectorAll('#snake-board div')
    if (grids && Array.from(grids).length) {
        grids.forEach((cell, ind) => {
            const pos = ind + 1; //30
            const gridRow = Math.floor(pos / 10); //30 / 10 = 3
            const gridCol = Math.ceil(pos % 10) || 10; // 30 % 10 = 10

            // console.log(`Grid row ${gridRow} and grid col ${gridCol}`)
            const match = config.snake.some(cord => cord.x === gridRow && cord.y === gridCol)
            if (match) {
                console.log({ match, ind })
                cell.classList.add('snake');
            } else if (cell.classList.contains('snake')) {
                cell.classList.remove('snake')
            }
        })
    }
    console.log('drawn')
}

export { updateSnake, drawSnake, gameConfigs }