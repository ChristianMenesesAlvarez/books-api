import axios from 'axios';

const url = 'https://api.nytimes.com/svc/books/v3/';
const key = '.json?api-key' + process.env.API_KEY;

const endpoints = {
  getCategories: 'lists/names',
  getList: 'lists/',
  getAllLists: 'lists/full-overview',
  getTop5AllLists: 'lists/overview',
  getBookReviews: 'reviews',
}

export async function getCategories() {
  const reqURI = url + endpoints.getCategories + key;
  try {
    const res = await axios.get(reqURI);
    const data = res.data.results;
    const array = data.map(({ display_name, list_name_encoded }) => { return [display_name, list_name_encoded] });
    return array;
  } catch (e) {
    return e.message;
  }
}

export async function getList(category, date = 'current', offset = 0) {
  const reqURI = url + endpoints.getList + date + '/' + category + key + '&offset=' + offset;
  try {
    const res = await axios.get(reqURI);
    return res.data;
  } catch (e) {
    return e.message;
  }
}

export async function getOverview(date = '') {
  const reqURI = url + endpoints.getTop5AllLists + key + '&published_date=' + date;
  try {
    const res = await axios.get(reqURI);
    return res.data;
  } catch (e) {
    return e.message;
  }
}
