import React, { useState, useEffect } from "react"
import Square from "./Square"

export default function Board(props) {
    const [squares, setSquares] = useState([])

    useEffect(() => {
        setSquares([])
    }, [props.rows, props.columns])

    function renderSquare(i) {
        function handleClick(id) {
            var newSquares = squares
            if (checkMine(id)) {
                newSquares[id] = "X"
            } else {
                newSquares[id] = ""
            }
            setSquares([...newSquares])
        }
        function checkMine(id) {
            for (let j = 0; j < props.mines; j++) {
                if (id === (props.minesArray[j][0] * props.minesArray[j][1])) {
                    return true
                }
            }
            return false
        }

        return (
            <Square 
                onClick={() => {
                    handleClick(i)
                }}
                value={squares[i]}
                key={i}
            />
        )
    }

    var a = []
    for (let i = 0; i < props.rows; i++) {
        var b = []
        for (let j = 0; j < props.columns; j++) {
            b.push(
                renderSquare(i * props.columns + j)
            )
        }
        a.push(
            <div className="board-row" key={i}>{b}</div>
        )
    }

    return (
        <div className="board">{a}</div>
    )
}