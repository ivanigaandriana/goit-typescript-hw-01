import axios from 'axios';

async function fetchData<T>(url:string): Promise<T> {
  try {
    const response  = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}
async function fetchData2() {
    const url = 'http://google.com';
  try {
    const response  = await fetchData<{name:string}>(url);
    console.log(response.name);
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}