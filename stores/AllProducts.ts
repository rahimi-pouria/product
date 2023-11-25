import { defineStore } from "pinia";
import axios from "axios";

export const useGetAllProduct = defineStore('product', {
    // create state
    state: () => ({
        data: []
    }),
    // getters
    getters: {
        setData: (state: any) => state.data,
      },
    //   actions
    actions: {
        async getProducts() {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                this.data = response.data;
            } catch (error) {
                console.error(error);
            }
        }
    }
})
export const setupStore = () => {
    useGetAllProduct;
};
