import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {

  static async getSnacks() {
    const res = await axios.get(`${BASE_API_URL}/snacks`);
    return res.data;
  }
  static async getDrinks() {
    const res = await axios.get(`${BASE_API_URL}/drinks`);
    return res.data;
  }

  static async addNewItem(newItem) {

    const { id, description, serve, recipe, name, foodType } = newItem;
    const res = await axios.post(`${BASE_API_URL}/${foodType}`,
      {
        id: id,
        name: name,
        description: description,
        recipe: recipe,
        serve: serve,
      }
    );
    return res.data
  }
}

export default SnackOrBoozeApi;
