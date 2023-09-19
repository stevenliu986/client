import axios, { AxiosResponse } from "axios";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
}

const baseUrl = "http://localhost:8080";

const createUser = async (user: IUser) => {
  try {
    let response = await axios.post(baseUrl + "/api/users", {
      body: JSON.stringify(user),
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getAllUsers = async (): Promise<AxiosResponse> => {
  try {
    const response = await axios.get(baseUrl + "/api/users");
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export { createUser, getAllUsers };
