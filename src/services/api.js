import axios from "axios";

const API = axios.create({
  baseURL: "https://internshala.com",
});

export const fetchInternships = async () => {
  try {

    const response = await API.get(
      "/hiring/search"
    );

    return response.data;

  } catch (error) {

    console.log(error);

    return [];

  }
};