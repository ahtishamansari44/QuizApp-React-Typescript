import {getQuiz, Quiz, Categories} from '../types/Quiz_types'

export const shuffleArray = (array: string[]) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

export const getQuizDetail = async (totalQuestions: number, category: number, level: string): Promise<Quiz[]> => {

    const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&category=${category}&difficulty=${level}&type=multiple`);
    const {results} =  await res.json();
    const quiz: Quiz[] = results.map((quizObj: getQuiz) => {
        return {
            question: quizObj.question,
            awnser: quizObj.correct_answer,
            option: shuffleArray(quizObj.incorrect_answers.concat(quizObj.correct_answer))
        }
    }) 
    return quiz;
}


export const getCategories = async () : Promise<Categories[]> => {
    const res = await fetch(`https://opentdb.com/api_category.php`);
    const { trivia_categories } = await res.json();
    const categories : Categories[] = trivia_categories;
    return categories;
  }