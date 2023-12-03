const baseUrl = 'http://localhost:3030/jsonstore/users';

//function that takes all users from server
export const getAll = async () => {
    try {
    const response = await fetch(baseUrl);
    const result = await response.json();

    //Takes all users and put in data
    const data = Object.values(result);

    return data;
    } catch (error) {
        console.log(error)
    }
    //if can,t take all users , return empty massive
    return [];
}