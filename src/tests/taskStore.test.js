import { setActivePinia, createPinia } from 'pinia';
import { useTaskStore } from '@/stores/task';
import { vi } from 'vitest';
import axios from 'axios';

vi.mock('axios');

describe('Task Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('fetches tasks correctly', async () => {
    axios.get.mockResolvedValue({ data: [{ id: 1, title: 'Tugas UTS' }] });
    const store = useTaskStore();
    await store.fetchTasks();
    expect(store.tasks.length).toBe(1);
    expect(store.tasks[0].title).toBe('Tugas UTS');
  });
});
