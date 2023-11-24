import { defineStore } from "pinia";


// create interface
export interface menu {
    id: number,
    name: string,
    path: string,
    icon: string
}

export const useMainMenu = defineStore('menu', () => { 
    const Mainmenu = ref<menu[]>([
        {
            id: 1,
            name: 'لیست محصولات',
            path: '/',
            icon: ''
        },
        {
            id: 2,
            name: 'دریافت مشاوره',
            path: '/Advice',
            icon: ''
        },
        {
            id: 3,
            name: 'سوالات متداول',
            path: '/AskQuestions',
            icon: ''
        },
        {
            id: 4,
            name: 'تماس با ما',
            path: '/Contact-us',
            icon: ''
        }
    ] as menu[])

    // return store
    return{
        Mainmenu
    }
})

