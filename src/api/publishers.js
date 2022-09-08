import axios from "axios";
export default class PublishersApi {
  async searchAllThePublishers() {
    const response = await axios.get(
      "https://cookie-lib.herokuapp.com/publishers"
    );
    return response.data;
  }

  async findPublisher(id) {
    const response = await axios.get(
      `https://cookie-lib.herokuapp.com/publishers/${id}`
    );
    return response.data;
  }

  async addPublisher(publisher) {
    const response = await axios.post(
      "https://cookie-lib.herokuapp.com/publishers",
      publisher
    );
    return response.data;
  }

//   Nesta parte estava pensando em fazer, ao invés de deletar pelo botão,
//   deletar caso o name algum atributo específico estivesse vazio, porém não 
//   conseguir terminar

  async deletePublisher(id) {
    const response = await axios.delete(
      `https://cookie-lib.herokuapp.com/publishers/${id}`
    );
    return response.data;
  }

  async updatePublisher(publisher) {
    const response = await axios.put(
      `https://cookie-lib.herokuapp.com/publishers/${publisher.id}`,
      publisher
    );
    return response.data;
  }
}
