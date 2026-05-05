import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue';
import RecipeGallery from '@/views/RecipeGallery.vue';
import PostRecipe from '@/views/PostRecipe.vue';
import EditRecipe from '@/views/EditRecipe.vue';
import DeleteRecipe from '@/views/DeleteRecipe.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/home-page',
      name: 'HomePage',
      component: HomePage,    
    },
    {
      path: '/recipe-gallery',
      name: 'RecipeGallery',
      component: RecipeGallery,    
    },
    {
      path: '/post-recipe',
      name: 'PostRecipe',
      component: PostRecipe,    
    },
    {
      path: '/edit-recipe',
      name: 'EditRecipe',
      component: EditRecipe,    
    },
    {
      path: '/delete-recipe',
      name: 'DeleteRecipe',
      component: DeleteRecipe,    
    },
  ],
})

export default router
