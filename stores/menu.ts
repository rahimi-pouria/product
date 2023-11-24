import { defineStore } from "pinia";



//  interface menu 
export interface menu {
    id: number,
    name: string,
    path: string,
    icon: string
}

// interface meta link
export interface MetaLink{
    title: string,
    link: string
}


export const useMainMenu = defineStore('menu', () => { 
    // create menu links
    const Mainmenu = ref<menu[]>([
        {
            id: 1,
            name: 'صفحه اصلی',
            path: '/',
            icon: ''
        },
        {
            id: 2,
            name: 'لیست محصولات',
            path: '/product',
            icon: ''
        },
        {
            id: 3,
            name: 'دریافت مشاوره',
            path: '/Advice',
            icon: ''
        },
        {
            id: 4,
            name: 'سوالات متداول',
            path: '/AskQuestions',
            icon: ''
        },
        {
            id: 5,
            name: 'تماس با ما',
            path: '/Contact-us',
            icon: ''
        }
    ] as menu[])

    // return store
    return{
        Mainmenu,
    }
})

