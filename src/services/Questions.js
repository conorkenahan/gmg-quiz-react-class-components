const getQuestions = () => {
    return fetch('./data.json')
    .then(res => res.json());
}

export default getQuestions;