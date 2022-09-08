import axios from 'axios';
export default class BooksApi {
  async searchAllTheBooks() {
    const response = await axios.get('https://cookie-lib.herokuapp.com/books');
    return response.data;
  }

  async findBook(id) {
    const response = await axios.get(`https://cookie-lib.herokuapp.com/books/${id}`);
    return response.data;
  }

  async addBook(book) {
    const response = await axios.post('https://cookie-lib.herokuapp.com/books', book);
    return response.data;
  }

  async deleteBook(id) {
    const response = await axios.delete(`https://cookie-lib.herokuapp.com/books/${id}`);
    return response.data;
  }

  async updateBook(book) {
    const response = await axios.put(
      `https://cookie-lib.herokuapp.com/books/${book.id}`,
      book,
    );
    return response.data;
  }
}