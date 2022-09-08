import axios from "axios";
export default class CategoriesApi {
  async searchAllTheCategories() {
    const response = await axios.get(
      "https://cookie-lib.herokuapp.com/categories"
    );
    return response.data;
  }

  async findCategory(id) {
    const response = await axios.get(
      `https://cookie-lib.herokuapp.com/categories/${id}`
    );
    return response.data;
  }

  async addCategory(category) {
    const response = await axios.post(
      "https://cookie-lib.herokuapp.com/categories",
      category
    );
    return response.data;
  }

  //   Nesta parte estava pensando em fazer, ao invés de deletar pelo botão,
  //   deletar caso o name algum atributo específico estivesse vazio, porém não 
  //   conseguir terminar
  async deleteCategory(id) {
    const response = await axios.delete(
      `https://cookie-lib.herokuapp.com/categories/${id}`
    );
    return response.data;
  }

  async updateCategory(category) {
    const response = await axios.put(
      `https://cookie-lib.herokuapp.com/categories/${category.id}`,
      category
    );
    return response.data;
  }
}
