import React from 'react'
import {scoreType} from '../types/Quiz_types'

const Score: React.FC<scoreType> = ({totalQuestions, getScore, level, category, handlePlayAgain}) => {
    return (
           <div className="container-fluid">
            <div className="row py-5">
            <div className="col-sm-12 col-md-4 col-lg-3"></div>
            <div className="col-sm-12 col-md-6 col-lg-6 px-lg-5">
            <div className="result">
            <h2 className="display-4 py-2 mb-3">Result</h2>
            <table className="table table-borderless">
                <tbody>
                    <tr className="border-bottom">
                    <td><h4 className="display-5" >Level :</h4></td>
                    <td><h4 className="display-5" >{level}</h4></td>
                    </tr>
                    <tr className="border-bottom">
                    <td><h4 className="display-5" >Category : </h4></td>
                    <td><h4 className="display-5" >{category}</h4></td>
                    </tr>
                    <tr className="border-bottom">
                    <td><h4 className="display-5" >Total Question : </h4></td>
                    <td><h4 className="display-5" >{totalQuestions}</h4></td>
                    </tr>
                    <tr className="border-bottom">
                    <td><h4 className="display-5" >Score : </h4></td>
                    <td><h4 className="display-5" >{getScore}</h4></td>
                    </tr>
                 </tbody>
                </table>
                <div className="d-flex flex-row-reverse bd-highlight">
                <button type="button" className="btn btn-bg px-4 my-4 " onClick={handlePlayAgain}>Play Again</button>                
                 </div>
            </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-3"></div>
                
            </div>
           </div>
    );
}

export default Score;