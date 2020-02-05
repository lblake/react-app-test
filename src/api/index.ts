import axios from "axios";
import { ITrader } from "../store/ducks/traders/types";

const apiClient = axios.create({
  baseURL:  process.env.REACT_APP_API_URL || "https://jsonplaceholder.typicode.com",
  responseType: "json",
  headers: {
    "Content-Type": "application/json"
  }
});

//   export const fetchTradersApiCall = async ():Promise<ITrader[] | ServerError> => {
export const fetchTradersApiCall = async (): Promise<ITrader[] | any> => {
  try {
    const response = await apiClient.get<ITrader[]>("/users");
    const traders = response.data;
    return traders;
  } catch (err) {
    //   if (err && err.response) {
    //     const axiosError = err as AxiosError<ServerError>
    //     return axiosError.response.data;
    //   }

    throw err;
  }
};
