import React from "react";
import axios from "axios";
const URL = 'https://fakestoreapi.com/products'
export const api = {
    getCategories: () => {
        return axios.get(`${URL}/categories`)
    },
    getOneCategory: (category) => {
        return axios.get(`${URL}/category/${category}`)
    },
    getAllProducts: () => {
        return axios.get(`${URL}`)
    },
    getSingleProduct: (id) => {
        return axios.get(`${URL}/${id}`)
    }
}