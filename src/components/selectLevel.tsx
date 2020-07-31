import React from 'react'
import {Categories, selectType} from '../types/Quiz_types'

function generateRange(min: number, max: number, step: number){
    let arr: number[] = [];
    for(let i:number = min; i <= max; i += step){
       arr.push(i);
    }
    return arr;
  }

const SelectLevel: React.FC<selectType> = ({category, levelHandleChange, cateHandleChange, numHandleChange, handleStart}) => {

    let numbers: number[] = generateRange(5, 50, 5)

    return (
            <div className="container-fluid">
            <div className="row py-4 mt-1">
            <div className="col-sm-12 col-md-2 col-lg-3"></div>
            <div className="col-sm-12 col-md-8 col-lg-6 px-md-5">
              <div className="level mx-md-5">
              <h2 className="display-4 py-2 mb-3">Quiz</h2>
                <h5 className="display-5 py-2">Select Level</h5>
                <select  onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>levelHandleChange(e.target.value)} name="Level">
                    <option value="easy" >Easy</option>
                    <option value="medium" >Normal</option>
                    <option value="hard" >Hard</option>
                </select>
                
                <h5 className="display-5 py-2">Select Category </h5>
                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>cateHandleChange(parseInt(e.target.value), e.target[e.target.selectedIndex].innerText)}  name="Category">
                { category.map((cateObj: Categories, ind: number)=>(
                    <option key={ind} value={cateObj.id}>{cateObj.name}</option>
                   ))} 
                 </select>

                <h5 className="display-5 py-2">Number of Questions </h5>
                 <select onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>numHandleChange(parseInt(e.target.value))}  name="Category">
                { numbers.map((num: number, ind: number)=>(
                    <option key={ind} value={num}>{num}</option>
                   ))} 
                 </select>

                  <div className="d-flex flex-row-reverse bd-highlight">
                 <button type="button" className="btn btn-bg px-4 my-4 " onClick={handleStart}>Start</button>
                 </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-2 col-lg-3"></div>
    
            </div>
            </div>
    );
}

export default SelectLevel;