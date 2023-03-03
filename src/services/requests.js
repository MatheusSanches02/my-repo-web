import api from "./api";

class Requests {
  static getRepos = async () => {
    try {
      const response = await api.get("/");
      return response.data;
    } catch (err) {
      console.log(err.message);
    }
  };

  static getReposId = async (id) => {
    try {
      const response = await api.get(`/findId/${id}`);
      return response.data;
    } catch (err) {
      console.log(err.message);
    }
  };

  static getReposName = async (name) => {
    try {
      const response = await api.get(`/findName/${name}`);
      return response.data;
    } catch (err) {
      console.log(err.message);
    }
  };

  static createRepo = async (object) => {
    try {
      const response = await api.post("/create", object);
      return response.data;
    } catch (err) {
      console.log(err.message);
    }
  };

  static updateRepo = async (object) => {
    try {
      const response = await api.put("/update", object);
      return response.data;
    } catch (err) {
      console.log(err.message);
    }
  };

  static deleteRepos = async () => {
    try {
      const response = await api.delete("/delete");
      return response.data;
    } catch (err) {
      console.log(err.message);
    }
  };

  static deleteReposId = async (id) => {
    try {
      const response = await api.delete(`/deleteId/${id}`);
      return response.data;
    } catch (err) {
      console.log(err.message);
    }
  };

  static getFavorites = async () => {
    try {
      const response = await api.get("/favorite");
      return response.data;
    } catch (err) {
      console.log(err.message);
    }
  };

  static addFavorite = async (id) => {
    try {
      const response = await api.post("/addFavorite", id);
      return response.data;
    } catch (err) {
      console.log(err.message);
    }
  };
}

export default Requests;
