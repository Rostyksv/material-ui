const API_KEY = 'JDEwSWYSUAIJINraszwJSSyHzEwcBuvKkBpDoDft';

export const fetchData = async (parameters) => {
    const data = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${parameters.rover}/photos?sol=${parameters.sol}&camera=${parameters.camera}&page=${parameters.page}&api_key=${API_KEY}`);
    const res = await data.json();
    return res;
}