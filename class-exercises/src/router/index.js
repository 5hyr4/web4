import { createRouter, createWebHistory } from 'vue-router'
import FormBasics from '@/components/FormBasics.vue'
import LetterBounce from '@/components/LetterBounce.vue';
import WpApiBasics from '@/components/WpApiBasics.vue';
import WpHeadlessBasics from '@/components/WpHeadlessBasics.vue';
import WpApiExplore from '@/components/WpApiExplore.vue';
import FetchBasics from '@/components/FetchBasics.vue';
import LettersView from '@/views/LettersView.vue';
import WpRestView from '@/views/WpRestView.vue';
import AddReview from '@/components/AddReview.vue'
import BasicComponent from '@/components/BasicComponent.vue'
import BasicReactivity from '@/components/BasicReactivity.vue'
import DatabaseAdmin from '@/components/DatabaseAdmin.vue'
import PropEx from '@/components/PropEx.vue'
import TaskManager from '@/components/TaskManager.vue'
import TwoWayBind from '@/components/TwoWayBind.vue'



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
      path: '/wp-headless-basics',
      name: 'WpHeadlessBasics',
      component: WpHeadlessBasics,    
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
    },
     {
       path: '/add-review',
       name: 'AddReview',
       component: AddReview,    
     },
     {
       path: '/basic-component',
       name: 'BasicComponent',
       component: BasicComponent,    
     },
     {
       path: '/basic-reactivity',
       name: 'BasicReactivity',
       component: BasicReactivity,    
     },
     {
       path: '/databade-admin',
       name: 'DatabaseAdmin',
       component: DatabaseAdmin,    
     },
     {
      path: '/prop-ex',
      name: 'PropEx',
      component: PropEx,    
    },
    {
      path: '/task-manager',
      name: 'TaskManager',
      component: TaskManager,    
    },
    {
      path: '/two-way-bind',
      name: 'TwoWayBind',
      component: TwoWayBind,    
    },
  ],
})

export default router
