import React from 'react'

export type getQuiz={
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}
export type Quiz = {
    question: string;
    awnser: string;
    option: string[];
}

export type Categories={
    id: number;
    name: string;
}

export type propsType = {
    question: string;
    option: string[];
    curStep: number;
    questuinCallback: (e: React.FormEvent<EventTarget>) => void;
    handleCurrectAns: (selectAwnser: string) => void;
}

export type selectType={
    category: {id:number, name:string}[];
    levelHandleChange: (level: string) => void;
    cateHandleChange: (categId:number, categName: string) => void;
    numHandleChange:  (level: number) => void;
    handleStart: () => void;

}

export type scoreType ={
    totalQuestions: number;
    getScore: number;
    level: string;
    category: string;
    handlePlayAgain: () => void;
}

export type CateSelect={
     id: number;
     name:string;
}