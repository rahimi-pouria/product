import { defineStore } from "pinia";

export interface footerMenu{
    id: number,
    name: string,
    path: string,
    icon: string
}

export const useQuickAccess = defineStore('menuFooter', () => {
    const quickAccess = ref<footerMenu[]>([
        {
            id: 1,
            name: 'درباره ما',
            path: '/'
        },
        {
            id: 2,
            name: 'بلاگ',
            path: '/'
        },
        {
            id: 3,
            name: 'تماس با ما',
            path: '/'
        },        {
            id: 4,
            name: 'خدمات پس از فروش',
            path: '/'
        }
    ] as footerMenu[])

    const SiteGuide = ref<footerMenu[]>([
        {
            id: 1,
            name: 'قوانین و مقرارت',
            path: '/'
        },
        {
            id: 2, 
            name: 'دریافت مشاوره',
            path: '/'
        },
        {
            id: 3,
            name: 'انتقادات و پیشنهادات',
            path: '/'
        }
    ] as footerMenu[])

    const socialMedia = ref<footerMenu[]>([
        {
            id: 1,
            name: 'تلگرام',
            path: '/',
            icon: ''
        },
        {
            id: 2,
            name: 'اینستاگرام',
            path: '/',
            icon: ''
        },
        {
            id: 3,
            name: 'لینکدین',
            path: '/',
            icon: ''
        },
    ] as footerMenu[]) 
    
    return{
        quickAccess,
        SiteGuide,
        socialMedia
    }
})