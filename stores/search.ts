import { defineStore } from "pinia";
import axios from 'axios'

export const useSearch = defineStore('search', {
    // create state
    state: () => ({
        searchData: []
    }),
    // getters
    getters: {
        Search: (state: any) => state.searchData
    },
    actions: {
        async getSeaches(){
            const respons = axios.get('')
        }
    }
})