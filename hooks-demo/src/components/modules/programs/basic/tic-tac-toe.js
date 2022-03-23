import React, { useState } from 'react';
import './index.css'

function TicTacToe(props) {

    const [current, setCurrent] = useState('CROSS');
    const [grid, setGrid] = useState([[{}, {}, {}], [{}, {}, {}], [{}, {}, {}]])

    const validateGrid = function (grid) {
        const [first, second, third] = grid[0];
        const [fourth, fifth, sixth] = grid[1];
        const [seventh, eigth, nineth] = grid[2];

        const firstRow = (first[current] && second[current] && third[current])
        const secRow = (fourth[current] && fifth[current] && sixth[current])
        const thirdRow = (seventh[current] && eigth[current] && nineth[current])
        const firstCol = (first[current] && fourth[current] && seventh[current]);
        const secCol = (second[current] && fifth[current] && eigth[current])
        const thirdCol = (third[current] && sixth[current] && nineth[current])
        const firstDiagonal = (first[current] && fifth[current] && nineth[current])
        const secDiagonal = (third[current] && fifth[current] && seventh[current])
        return !!(firstRow || secRow || thirdRow || firstCol || secCol || thirdCol || firstDiagonal || secDiagonal)
    }

    const resetGrid = (msg, time) => {
        setTimeout(_ => {
            alert(msg);
            setGrid([[{}, {}, {}], [{}, {}, {}], [{}, {}, {}]])
            setCurrent('CROSS')
        }, time);
    }

    const updateGrid = function (rowIndex, colIndex, cell) {

        if (cell['CROSS'] || cell['CIRCLE']) return;
        setCurrent((current === 'CROSS') ? 'CIRCLE' : 'CROSS')
        grid.forEach((row, i) => (i === rowIndex) ? row.forEach((col, j) => (colIndex === j) ? col[current] = true : null) : null)

        setGrid(grid);
        const res = validateGrid(grid);

        if (res) {
            resetGrid(`${(current === 'CROSS') ? 'Player-1' : 'Player-2'} Won`, 300)
        } else if (grid.reduce((acc, row) => acc && row.every(cell => cell['CROSS'] || cell['CIRCLE']), true)) {
            resetGrid(`Draw!!`, 1000)
        }
    }


    return (
        <div className="tic-tac-toe-box">
            {grid.map((g, i) => {
                return (
                    <div key={`row-` + i}>
                        {g.map((cell, j) => (
                            <div onClick={() => updateGrid(i, j, cell)} key={`col-` + j}>
                                {cell['CROSS'] ? 'X' : (cell['CIRCLE']) ? 'O' : null}
                            </div>
                        ))}
                    </div>
                )

            })}
        </div>
    );
}

export default TicTacToe;