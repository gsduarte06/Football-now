import fetchMock from "fetch-mock";
import games from "./mocks/games.js";

fetchMock.mock('http://localhost:4000/games', games)

export async function get(apiBaseUrl,endpoint){
    try {
        const response = await fetch(`${apiBaseUrl}/${endpoint}`)
        return handleResponse(response)
    } catch (error) {
        throw error;
    }
}