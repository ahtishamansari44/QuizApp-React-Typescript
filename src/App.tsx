import React, {useEffect, useState} from 'react';
import './App.css';
import {getQuizDetail, getCategories} from './api/Quiz_api'
import {Quiz, Categories, CateSelect} from './types/Quiz_types'
import Loading from './components/loading'
import SelectLevel from './components/selectLevel'
import Questions from './components/questions'
import Score from './components/score'


function App() {

let [cate, setCate] = useState<Categories[]>([])
let [quiz, setQuiz] = useState<Quiz[]>([])
let [selectLevel, setSelectLevel] = useState<string>("easy");
let [selectCate, setSelectCate] = useState<CateSelect>({id:9, name:"General Knowledge"});
let [selectNum, setSelectNum] = useState<number>(5);
let [currentStep, setCurrentStep] =useState<number>(0);
let [start, setStart] = useState<boolean>(false)
let [score, setScore] = useState<number>(0)


useEffect( () => {

  async function fetchData(){
    const data: Quiz[] = await getQuizDetail(selectNum, selectCate.id, selectLevel)
    setQuiz(data)
  }

  async function fetchCategories(){
    const data: Categories[] = await getCategories();
    setCate(data)
  }

  fetchData();
  fetchCategories();
},
[selectCate, selectLevel, selectNum]);

const LevelHandleChange = (level:string) => {
  setSelectLevel(level);
}

const CateHandleChange = (categId: number, categName: string) => {
  setSelectCate({id: categId, name:categName});
}

const NumHandleChange = (num: number) => {
  setSelectNum(num);
}

const HandleStart = () => {
    setStart(true);
}

const handleSubmit = (e: React.FormEvent<EventTarget>) =>{
  e.preventDefault();
  if(currentStep !== quiz.length){
  setCurrentStep(++currentStep);
  }
  else{
    setCurrentStep(0);
  }
}

const HandleCurrectAns = (currectAwnser: string) => {
  if(currectAwnser===quiz[currentStep].awnser){
  setScore(++score);
  }
}

const HandlePlayAgain = () =>{
  setStart(false);
  setScore(0);
  setCurrentStep(0);
  setSelectLevel("easy");
  setSelectCate({id:9, name:"General Knowledge"});
  setSelectNum(5)
}


if(!quiz.length) return <Loading />

  return (
    <>

    {
    
     !start ?

      <SelectLevel 
       category = {cate}
       levelHandleChange={LevelHandleChange}
       cateHandleChange={CateHandleChange}
       numHandleChange={NumHandleChange}
       handleStart={HandleStart}
      />

     :
     
      currentStep!==quiz.length ?
       <Questions 
         question={quiz[currentStep].question} 
         option={quiz[currentStep].option}
         curStep={currentStep} 
         questuinCallback={handleSubmit}
         handleCurrectAns={HandleCurrectAns}
       />
      :
       <Score
         totalQuestions= {quiz.length}
         getScore= {score}
         level={selectLevel}
         category={selectCate.name}
         handlePlayAgain={HandlePlayAgain}
        />

    }
      
    </>
  );
}

export default App;
