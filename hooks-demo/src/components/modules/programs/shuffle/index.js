import React, { useEffect, useState } from 'react';
import './index.css'

let nums = Array(15).fill(1).map((n, i) => i + 1).sort(() => Math.floor(Math.random() * (5 + 7) - 7));
let parent = null;

function ShuffleAndSort() {
    const [source, setSource] = useState(null);


    useEffect(() => {
        const match = Array.from(document.getElementsByClassName('shuffle-container'))
        if (match && match.length) {
            parent = match[0]
        }
    })



    const onDragStart = function (e) {
        e.dataTransfer.setData("value", e.target.innerText);
        setSource(e.target);
    }
    const onItemDrop = function (e) {
        e.preventDefault();
        const validTarget = e.target.classList.contains('box');
        const isBlankBox = e.target.innerText === '';
        const isPrev = source.previousElementSibling === e.target;
        const isNext = source.nextElementSibling === e.target;
        const sourcePos = source.getBoundingClientRect();
        const targetPos = e.target.getBoundingClientRect();
        const isTop = ((targetPos.top - sourcePos.top) === 47.5) && (targetPos.x === sourcePos.x);
        const isBottom = ((sourcePos.y - targetPos.y) === 47.5) && (targetPos.x === sourcePos.x);
        if (validTarget && isBlankBox && (isPrev || isNext || isTop || isBottom)) {
            e.target.innerText = e.dataTransfer.getData('value')
            source.innerText = ''
        }

        const childrens = parent && Array.from(parent.children)
        const match = childrens.every((e, i) => (i === (childrens.length - 1)) || ((i + 1) === e.innerText))
        if (match) {
            alert('You won.!!!')
            Array(15).fill(1).map((n, i) => i + 1).sort(() => Math.floor(Math.random() * (5 + 7) - 7));
        }
    }


    return (
        <div className="shuffle-container">
            {nums.map((num, i) => (
                <div
                    className="box"
                    key={`box-${i}`}
                    draggable
                    onDragStart={onDragStart}
                    onDrop={onItemDrop}
                    onDragOver={(e) => e.preventDefault()}>
                    {num}
                </div>
            ))}
            <div draggable
                className="box"
                onDragStart={onDragStart}
                onDrop={onItemDrop}
                onDragOver={(e) => e.preventDefault()}>
            </div>
        </div>
    );
}

export default ShuffleAndSort;