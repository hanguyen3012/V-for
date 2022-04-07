import http from "../http-common"

class UserDataService  {
    getAll() {
        return http.get("/anagementUsers");
      }
      get(id) {
        return http.get(`/anagementUsers/${id}`);
      }
      create(data) {
        return http.post("/addNewUser", data);
      }
      update(id, data) {
        return http.put(`/editUser/${id}`, data);
      }
      delete(id) {
        return http.delete(`/deleteUser/${id}`);
      }
    //   deleteAll() {
    //     return http.delete(`/tutorials`);
    //   }
    //   findByTitle(title) {
    //     return http.get(`/tutorials?title=${title}`);
    //   }
}

export default new UserDataService;