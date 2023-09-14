import axios from "axios"
const randomDataAPI = axios.create({
  baseURL: "https://random-data-api.com/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function randomdataapi4_get_api_users_random_user_read(payload) {
  return randomDataAPI.get(`/api/users/random_user`)
}
export const apiService = { randomdataapi4_get_api_users_random_user_read }
