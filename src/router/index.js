import { createRouter, createWebHistory } from 'vue-router';
import TaskList from '@/components/TaskList.vue';
import TaskForm from '@/components/TaskForm.vue';
import TaskDetail from '@/components/TaskDetail.vue';

const routes = [
  { path: '/', component: TaskList },
  { path: '/add', component: TaskForm },
  { path: '/edit/:id', component: TaskForm, props: true },
  { path: '/task/:id', component: TaskDetail, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
