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
            <div className="levelMain">
            <div className="level">
                <h1>Quiz</h1>
                <h4>Select Level </h4>
                <select  onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>levelHandleChange(e.target.value)} name="Level">
                    <option value="easy" >Easy</option>
                    <option value="medium" >Normal</option>
                    <option value="hard" >Hard</option>
                </select>
                
                <h4>Select Category </h4>
                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>cateHandleChange(parseInt(e.target.value), e.target[e.target.selectedIndex].innerText)}  name="Category">
                { category.map((cateObj: Categories, ind: number)=>(
                    <option key={ind} value={cateObj.id}>{cateObj.name}</option>
                   ))} 
                 </select>

                <h4>Number of Questions </h4>
                 <select onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>numHandleChange(parseInt(e.target.value))}  name="Category">
                { numbers.map((num: number, ind: number)=>(
                    <option key={ind} value={num}>{num}</option>
                   ))} 
                 </select>

                 <button type="button" onClick={handleStart}>Start</button>
                
            </div>
            </div>
    );
}

export default SelectLevel;