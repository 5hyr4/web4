import { createRouter, createWebHistory } from 'vue-router'
import BasicComponent from '@/components/BasicComponent.vue';
import BookCard from '@/components/BookCard.vue';
import CountComponent from '@/components/CountComponent.vue';
import LinkImageComponent from '@/components/LinkImageComponent.vue';
import ListComponent from '@/components/ListComponent.vue';
import ObjectComponent from '@/components/ObjectComponent.vue';
import SampleApi from '@/components/SampleApi.vue';
import TextComponent from '@/components/TextComponent.vue';





const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/basic-component',
      name: 'BasicComponent',
      component: BasicComponent,
    },
    {
      path: '/book-card',
      name: 'BookCard',
      component: BookCard,
    },
    {
      path: '/count-component',
      name: 'CountComponent',
      component: CountComponent,
    },
    {
      path: '/link-image-component',
      name: 'LinkImageComponent',
      component: LinkImageComponent,
    },
    {
      path: '/list-component',
      name: 'ListComponent',
      component: ListComponent,
    },
    {
      path: '/object-component',
      name: 'ObjectComponent',
      component: ObjectComponent,
    },
    {
      path: '/sample-api',
      name: 'SampleApi',
      component: SampleApi,
    },
    {
      path: '/text-component',
      name: 'TextComponent',
      component: TextComponent,
    },
    

  ],
})


export default router
