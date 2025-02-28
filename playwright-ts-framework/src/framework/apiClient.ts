// API interactions
import axios from 'axios';
export class ApiClient {
  static async get(url: string) {
    return await axios.get(url);
  }
}