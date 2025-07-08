// src/stores/task.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [],
  }),
  actions: {
    async fetchTasks() {
      const res = await axios.get('http://localhost:3000/tasks');
      this.tasks = res.data;
    },
    async addTask(task) {
      const res = await axios.post('http://localhost:3000/tasks', task);
      this.tasks.push(res.data);
    },
    async deleteTask(id) {
      await axios.delete(`http://localhost:3000/tasks/${id}`);
      this.tasks = this.tasks.filter(t => t.id !== id);
    },
    async updateTask(id, updatedTask) {
      await axios.put(`http://localhost:3000/tasks/${id}`, updatedTask);
      await this.fetchTasks();
    },
    async getTaskById(id) {
      const res = await axios.get(`http://localhost:3000/tasks/${id}`);
      return res.data;
    }
  }
});
