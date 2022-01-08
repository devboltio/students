// The file to make API calls for the questions and MAYBE the codeEditor

// just an example of what this might look like
export type Question = {
    category: string;
    correct_ans: string;
    difficulty: string;
    question_title: string;
    question_description: string;
    question_nr: number;
    question_examples: string[];
}

// export type QuestionState = Question & {answers: string[]}; //this is for mapping (what?) dunno if need

export enum Difficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard'
}
export const fetchQuestions = async(difficulty: Difficulty, language: string) => {
    const endpoint = ''; //the place the question is located at with ${difficulty} and ${language};
    const data = await (await fetch(endpoint)).json(); //awaits the fetch itself and then awaits converting it to json
    return data.results.map((question: Question) => (
        {
            ...question,
            answer: question.correct_ans 
            // what you're mapping will depend on the api
        }
    ))
}