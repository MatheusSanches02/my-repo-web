import api from "./api";

class Requests {
  static getRepos = async () => {
    let content;
    await api
      .get("/")
      .then((res) => {
        const response = res.data;
        content = response;
      })
      .catch((res, err) => {
        return err;
      });
    return content;
  };

  static getReposId = async (id) => {
    let content;
    await api
      .get(`/findId/${id}`)
      .then((res) => {
        const response = res.data;
        content = response;
      })
      .catch((res, err) => {
        return err;
      });
    return content;
  };

  static getReposName = async (name) => {
    let content;
    await api
      .get(`/findName/${name}`)
      .then((res) => {
        const response = res.data;
        content = response;
      })
      .catch((res, err) => {
        return err;
      });
    return content;
  };

  static createRepo = async (object) => {
    let content;
    await api
      .post("/create", object)
      .then((res) => {
        const response = res.data;
        content = response;
      })
      .catch((res, err) => {
        return err;
      });
    return content;
  };

  static updateRepo = async (object) => {
    let content;
    await api
      .put("/update", object)
      .then((res) => {
        const response = res.data;
        content = response;
      })
      .catch((res, err) => {
        return err;
      });
    return content;
  };

  static deleteRepos = async () => {
    let content;
    await api
      .delete("/delete")
      .then((res) => {
        const response = res.data;
        content = response;
      })
      .catch((res, err) => {
        return err;
      });
    return content;
  };

  static deleteReposId = async (id) => {
    let content;
    await api
      .delete(`/deleteId/${id}`)
      .then((res) => {
        const response = res.data;
        content = response;
      })
      .catch((res, err) => {
        return err;
      });
    return content;
  };

  static getFavorites = async () => {
    let content;
    await api
      .get("/favorite")
      .then((res) => {
        const response = res.data;
        content = response;
      })
      .catch((res, err) => {
        return err;
      });
    return content;
  };

  static addFavorite = async (id) => {
    let content;
    await api
      .post("/addFavorite", id)
      .then((res) => {
        const response = res.data;
        content = response;
      })
      .catch((res, err) => {
        return err;
      });
    return content;
  };
}

export default Requests;
