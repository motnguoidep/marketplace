import axios from 'axios';
import { defineStore } from 'pinia'

export interface Product{
    id?: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
}

interface ProductStore{
  products: Array<Product>,
    one:Product,
    visible: boolean,
    checked: boolean,
    selected: Array<Product>,
    searchQuery: Array<Product>,
    
}

function initState(): ProductStore{
  return {
    products: [],
    one:{
    title:"",
    image:"",
    price: 0,
    category:"",
    description:"",},
    visible: false,
    checked : false,
    selected: [],
    searchQuery: [],
  }

}
export const productStore = defineStore('productStore', {
  state: () => {
    return initState()
  },
  actions: {
    async fetchData(){
      await axios
      .get(`https://fakestoreapi.com/products`)
      .then((response) => {this.products = response.data})
    },
    async getDetailProducts(id: number){
      await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {this.products = response?.data})
    },
    async create(one:Product) {
          console.log(one);
        await axios
        .post(`https://fakestoreapi.com/products?limit=5`, one )
        .then( (response) => console.log(response))
        .catch(function (error) {
          console.log(error);
        });  
    },
      
    async delete(id: number){
       await axios.delete(`https://fakestoreapi.com/products?limit=5${id}`)
            .catch((error) => console.log(error));

    },
    async update(one:Product){
      await axios.put(`https://fakestoreapi.com/products?limit=5${one.id}`,one)
        .catch((error) => console.log(error));
    },
    
    async resultQuery() {
      if (this.searchQuery) {
        return this.products.filter((one) => {
          return this.searchQuery
            .toString()
            .toLowerCase()
            .split(" ")
            .every((v) => one.title.toLowerCase().includes(v));
        });
      } else {
        return this.products;
      }
    },
    async checkForm(){

    }

  },
})