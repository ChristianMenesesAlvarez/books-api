import axios from 'axios';

const url = 'https://api.nytimes.com/svc/books/v3/';
const key = '.json?api-key=xxFT7k9zAeoSrJGXAGtwf8wGAhNLFF8C';

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

async function getList(date = 'current', category, offset = 0) {
  if (!date.match(/^(\d{4}-\d{2}-\d{2}|current)$/)) return 'No valid date';
  const reqURI = url + endpoints.getList + date + '/' + category + key + '&offset=' + offset;
  try {
    const res = await axios.get(reqURI);
    const data = res.data.results;
    const array = data.map(({ display_name, list_name_encoded }) => { return [display_name, list_name_encoded] });
    return array;
  } catch (e) {
    return e.message;
  }
}
