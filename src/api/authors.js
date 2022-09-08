import axios from 'axios';
export default class AuthorsApi {
  async searchAllTheAuthors() {
    const response = await axios.get('https://cookie-lib.herokuapp.com/authors');
    return response.data;
  }

  async findAuthor(id) {
    const response = await axios.get(`https://cookie-lib.herokuapp.com/authors/${id}`);
    return response.data;
  }

  async addAuthor(author) {
    const response = await axios.post('https://cookie-lib.herokuapp.com/authors', author);
    return response.data;
  }

  async deleteAuthor(id) {
    const response = await axios.delete(`https://cookie-lib.herokuapp.com/authors/${id}`);
    return response.data;
  }

  async updateAuthor(author) {
    const response = await axios.put(
      `https://cookie-lib.herokuapp.com/authors/${author.id}`,
      author,
    );
    return response.data;
  }
}