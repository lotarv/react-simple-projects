import {useEffect, useState} from "react"
import { FaCircle, FaCross } from "react-icons/fa";
import "./styles.css"
function TicTacToe(){
    const [sign, setSign] = useState("X");
    const [cells, setCells] = useState(Array(9).fill(''));
    const [resultMessage, setResultMessage] = useState('');
    const [gameOver, setGameOver] = useState(false);
    const [redCells, setRedCells] = useState([]);
    const win_positions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [6,4,2],
    ]
    function handleCellClick(index){
        if (cells[index] || gameOver) return;
        let cellsCpy = [...cells];
        cellsCpy[index] = sign;
        setSign(sign == "X"? "O" : "X");
        setCells(cellsCpy);
    }
    function checkWin(){
        //Проверка на победу
        for (let i = 0; i < win_positions.length; i++){
            let [x,y,z] = [...win_positions[i]];
            if (cells[x] && cells[x] == cells[y] && cells[x] == cells[z]) {
                setGameOver(true);
                setResultMessage(`The winner is ${cells[x]}`);
                highlightCells(x,y,z);
                return;
            }
        }

        //ничья
        if (cells.indexOf('') == -1) {
            setGameOver(true);
            setResultMessage("it's a tie!");
            return;
        }

    }

    function highlightCells(x,y,z){
        document.getElementById(x).classList.add("highlight-cell");
        document.getElementById(y).classList.add("highlight-cell");
        document.getElementById(z).classList.add("highlight-cell");
        setRedCells([x,y,z]);
    }

    function removeHighLightCells(x,y,z) {
        document.getElementById(x).classList.remove("highlight-cell");
        document.getElementById(y).classList.remove("highlight-cell");
        document.getElementById(z).classList.remove("highlight-cell");
        setRedCells([]);
    }

    function restartGame(){
        setSign("X");
        setGameOver(false);
        setCells(Array(9).fill(''));
        setResultMessage('');
        removeHighLightCells(...redCells);
    }

    useEffect(() => {
        checkWin();
    }, [sign])


    return <div className="tic-tac-toe block">
        <h2 className="title">Tic Tac Toe</h2>
        <div className="game-cells">
            <div className="game-row">
                <div className="game-cell" id = "0" onClick = {() => handleCellClick(0)}>{cells[0]}</div>
                <div className="game-cell" id = "1" onClick = {() => handleCellClick(1)}>{cells[1]}</div>
                <div className="game-cell" id = "2" onClick = {() => handleCellClick(2)}>{cells[2]}</div>
            </div>
            <div className="game-row">
                <div className="game-cell" id = "3" onClick = {() => handleCellClick(3)}>{cells[3]}</div>
                <div className="game-cell" id = "4" onClick = {() => handleCellClick(4)}>{cells[4]}</div>
                <div className="game-cell" id = "5" onClick = {() => handleCellClick(5)}>{cells[5]}</div>
            </div>
            <div className="game-row">
                <div className="game-cell" id = "6" onClick = {() => handleCellClick(6)}>{cells[6]}</div>
                <div className="game-cell" id = "7" onClick = {() => handleCellClick(7)}>{cells[7]}</div>
                <div className="game-cell" id = "8" onClick = {() => handleCellClick(8)}>{cells[8]}</div>
            </div>
        </div>
        <div className="game-info">
            <div className="game-turn">{gameOver? resultMessage : `Next turn is ${sign}`}</div>
            {
                gameOver && <button className="game-restart-button" onClick = {() => restartGame()}>Start again?</button>
            }
        </div>
    </div>
}

export default TicTacToe;