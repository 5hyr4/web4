import { createRouter, createWebHistory } from 'vue-router'
import FormBasics from '@/components/FormBasics.vue'
import LetterBounce from '@/components/LetterBounce.vue';
import WpApiBasics from '@/components/WpApiBasics.vue';
import WpApiExplore from '@/components/WpApiExplore.vue';
import FetchBasics from '@/components/FetchBasics.vue';

import LettersView from '@/views/LettersView.vue';
import WpRestView from '@/views/WpRestView.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
    path: '/',
    name: 'Home',
    component: FormBasics,
    },
    {
    path: '/letters-view',
    name: 'LettersView',
    component: LettersView,    
    },
    {
    path: '/wp-rest-view',
    name: 'WpRestView',
    component: WpRestView,    
    },
    {
    path: '/wp-api-basics',
    name: 'WpApiBAsics',
    component: WpApiBasics,    
    },
    {
    path: '/wp-api-explore',
    name: 'WpApiExplore',
    component: WpApiExplore,    
    },
    {
    path: '/fetch-basics',
    name: 'FetchBAsics',
    component: FetchBasics,    
    }
  ],
})

export default router
