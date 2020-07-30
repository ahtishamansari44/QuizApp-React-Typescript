import React, {useState} from 'react'
import {propsType} from '../types/Quiz_types'

const Questions:React.FC<propsType> = ({question, option, curStep, questuinCallback, handleCurrectAns}) => {
    
    let [selectAwnser, setSelectAwnser] = useState<string>('');

    const handleChange = (ans: string) => {
        setSelectAwnser(ans)
    }

    return (
            <div className="questionsMain">
            <div className="questions">
                <h1>Quiz</h1>
                <div className="heading">
                <h3>Q.{++curStep}) </h3>
                <h3><span>{question}</span></h3>
                </div>
                <form onSubmit={questuinCallback}>
                   {
                       option.map((opt:string, ind:number)=>{
                           return (
                               <h4 key={ind}>
                               <label>
                                   <input 
                                   type="radio" 
                                   name="option" 
                                   value={opt}
                                   required
                                   onChange={(e: React.ChangeEvent<HTMLInputElement>)=>handleChange(e.target.value)}
                                   checked = {selectAwnser===opt}
                                    />
                                   {opt}
                               </label>
                               </h4>
                           )
                       })
                   }
                   <input type="submit" className="btn" value="Next" onClick={()=>handleCurrectAns(selectAwnser)} />
                </form>
            </div>
            </div>
    );
}

export default Questions;