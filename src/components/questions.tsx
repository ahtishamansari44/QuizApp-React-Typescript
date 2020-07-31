import React, {useState} from 'react'
import {propsType} from '../types/Quiz_types'

const Questions:React.FC<propsType> = ({question, option, curStep, questuinCallback, handleCurrectAns}) => {
    
    let [selectAwnser, setSelectAwnser] = useState<string>('');

    const handleChange = (ans: string) => {
        setSelectAwnser(ans)
    }

    return (
            <div className="container-fluid">
            <div className="row py-4 mt-1">
            <div className="col-sm-12 col-md-1 col-lg-2"></div>
            <div className="col-sm-12 col-md-10 col-lg-8 px-lg-5">
            <div className="questions mx-lg-5">
            <h2 className="display-4 py-2 mb-3">Quiz</h2>
                <div className="heading my-4">
                <h4 className="display-5 ">Q.{++curStep}) </h4>
                <h4 className="display-5 "><span>{question}</span></h4>
                </div>
                <form onSubmit={questuinCallback}>
                   {
                       option.map((opt:string, ind:number)=>{
                           return (
                               <h5 key={ind}>
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
                               </h5>
                           )
                       })
                   }
                   
                   <div className="d-flex flex-row-reverse bd-highlight">
                   <input type="submit" className="btn btn-bg px-4 my-4 " value="Next" onClick={()=>handleCurrectAns(selectAwnser)} />
                 </div>
                </form>
            </div>           
            </div>
            <div className="col-sm-12 col-md-1 col-lg-2"></div>
                
            </div>
            </div>
    );
}

export default Questions;