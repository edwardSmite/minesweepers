import React, { useState, useEffect } from "react"
import Board from "./components/Board"
import "./index.css"

export default function App() {
  const [rows, setRows] = useState(0)
  const [rows1, setRows1] = useState(0)
  const [columns, setColumns] = useState(0)
  const [columns1, setColumns1] = useState(0)
  const [mines, setMines] = useState(0)
  const [mines1, setMines1] = useState(0)
  const [minesArray, setMinesArray] = useState([])

  useEffect(() => {
    setMinesArray([])
  }, [mines])

  function handleRowsChange(e) {
    e.preventDefault()
    setRows1(e.target.value)
    setRows(rows1)
    console.log(rows1)
    console.log(e.target.value)
  }
  function handleColumnsChange(e) {
    e.preventDefault()
    setColumns1(e.target.value)
    setColumns(columns1)
  }
  function handleMinesChange(e) {
    e.preventDefault()
    setMines1(e.target.value)
  } 
  function handleChange(e) {
    e.preventDefault()
    
    
    
    setMines(mines1)
    MineGenerator(rows, columns, mines)
    console.log(minesArray)
    
  }

  function MineGenerator(rows, columns, mines) {
    var newArray = minesArray
    for (let i = 0; i < mines; i++) {
        newArray[i] = [Math.floor(Math.random() * rows), Math.floor(Math.random() * columns)]
    }
    setMinesArray([...newArray])
    console.log(rows)
  }

  return (
    <div>
      <form onSubmit={handleChange}>
        <input type="text" placeholder="how many rows?" onChange={handleRowsChange}/>
        <input type="text" placeholder="how many columns?" onChange={handleColumnsChange}/>
        <input type="text" placeholder="how many mines" onChange={handleMinesChange}/>
        <input type="submit" value="submit"/>
      </form><br/><br/>
      <div>
        <Board rows={rows} columns={columns} mines={mines} minesArray={minesArray}/>
      </div>
    </div>
  )
}