<template>
  <div>
    <h2 class="text-xl font-bold">📋 Daftar Tugas</h2>
    <router-link to="/add" class="btn">+ Tambah Tugas</router-link>
    <ul>
      <li v-for="task in taskStore.tasks" :key="task.id">
        {{ task.title }} - {{ task.category }}
        <router-link :to="`/edit/${task.id}`">✏️</router-link>
        <button @click="taskStore.deleteTask(task.id)">🗑️</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useTaskStore } from '@/stores/task';

const taskStore = useTaskStore();
onMounted(() => taskStore.fetchTasks());
</script>
