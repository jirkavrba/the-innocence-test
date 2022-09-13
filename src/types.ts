export interface QuestionData {
    index: number,
    text: string,
    emoji: string,
    weight: number,
}

export interface AnsweredQuestionData extends QuestionData {
    answer: boolean
}