import axios from 'axios';

const key = 'xxFT7k9zAeoSrJGXAGtwf8wGAhNLFF8C';
const category = 'hardcover-fiction';
const url = 'https://api.nytimes.com/svc/books/v3/';
const endpoint = 'list/current/';
const requestURI = url + 'lists/current/' + category + '.json?api-key=' + key;
const res = axios.get()
