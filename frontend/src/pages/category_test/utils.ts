import {IValues} from './CategoryTest';

export const validate = (answers: IValues, questionsIds: number[]): number | undefined => {
    let incorrectId;

    for (const questionId of questionsIds) {
        if (!answers[questionId] || answers[questionId].size === 0) {
            incorrectId = +questionId;
            return incorrectId;
        }
    }
};

export const getAllAnswers = (values: IValues) => {
    return Object.values(values).reduce((prev: number[], current: number[]) => {
        return [...prev, ...current];
    }, []);
};
