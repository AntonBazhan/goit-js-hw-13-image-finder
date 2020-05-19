const baseUrl = 'https://pixabay.com/api/';

export default {
  page: 1,
  query: '',
  fetcArticles(query) {
    const keyapi = '16607986-426163c53c50d3a083010b3ce';
    const requestparams = `?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${keyapi}`;
    return fetch(baseUrl + requestparams)
      .then(res => res.json())
      .then(parseRes => {
        this.incrementPage();
        return parseRes.hits;
      });
  },
  get searchQuerry() {
    return this.query;
  },
  set searchQuerry(string) {
    this.query = string;
  },
  incrementPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
  },
};
