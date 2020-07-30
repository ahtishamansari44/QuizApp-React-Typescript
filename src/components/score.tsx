import React from 'react'
import {scoreType} from '../types/Quiz_types'

const Score: React.FC<scoreType> = ({totalQuestions, getScore, level, category, handlePlayAgain}) => {
    return (
           <div className="scoreMain">
            <div className="score">
                <h1>Result</h1>
                 <div>
                     <h3>Level : {level}</h3>
                     <hr/>
                     <h3>Category : {category}</h3>
                     <hr/>
                     <h3>Total Question :    {totalQuestions}</h3>
                     <hr/>
                     <h3>Score : {getScore}</h3>
                     <hr/>
                 </div>
                 <button type="button" onClick={handlePlayAgain}>Play Again</button>
            </div>
           </div>
    );
}

export default Score;