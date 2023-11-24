import { defineStore } from "pinia";
import axios from 'axios'

export const useGetAllProduct = defineStore('product', {
    state: () => ({
        data: []
    }),
    getters: {
        getProducts(state){
            return state.data
        }
    },
    actions: {
        async getProducts(){
            try{
                const response = await axios.get('https://fakestoreapi.com/products')
                console.log(response)
            }catch(error){}
        }
    }
})