import { createRouter, createWebHistory } from 'vue-router'
import CountComponent from '@/components/CountComponent.vue';
import LinkImageComponent from '@/components/LinkImageComponent.vue';
import ListComponent from '@/components/ListComponent.vue';
import BookCard from '@/components/BookCard.vue';
import ObjectComponent from '@/components/ObjectComponent.vue';
import TextComponent from '@/components/TextComponent.vue';
import SampleApi from '@/components/SampleApi.vue';
import WpHeadlessBasics from '@/components/WpHeadlessBasics.vue';
import FormBasics from '@/components/FormBasics.vue';




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

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
      path: '/book-card',
      name: 'BookCard',
      component: BookCard,
    },
    {
      path: '/object-component',
      name: 'ObjectComponent',
      component: ObjectComponent,
    },
      {
      path: '/book-card',
      name: 'BookCard',
      component: BookCard,
    },
    {
      path: '/text-component',
      name: 'TextComponent',
      component: TextComponent,
    },
    {
      path: '/sample-api',
      name: 'SampleApi',
      component: SampleApi,
    },
    {
      path: '/wp-headless-basics',
      name: 'WpHeadlessBasics',
      component: WpHeadlessBasics,
    },
        {
      path: '/form-basics',
      name: 'FormBasics',
      component: FormBasics,
    },
    

  ],
})


export default router
