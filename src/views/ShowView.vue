<template>
  <div class="d-flex mb-3">
    <form class="d-flex wrapper-search" role="search">
      <BIconSearch class="search-icon" />
      <input
        class="form-control me-2 ps-5"
        type="search"
        placeholder="Search"
        aria-label="Search"
        v-model="search"
        @input="searchNote"
      />
    </form>
    <button class="btn-filter border-0 fs-6" @click.prevent="handleSort">
      <BIconSortDown class="icon" />
      Sort
    </button>
  </div>
  <ul class="items pt-3 p-0 d-flex flex-column gap-2">
    <li
      v-for="(item, index) in notes"
      :key="index"
      class="d-flex justify-content-between align-items-center item p-1 rounded"
    >
      <h2 class="fs-6 pt-2 ps-2 title-item">{{ item?.title }}</h2>
      <div class="d-flex align-items-center justify-content-center gap-2 me-2">
        <router-link
          class="bg-warning text-light py-1 px-2 rounded"
          :to="{ path: `update/${item?.id}` }"
        >
          <BIconPencil />
        </router-link>
        <button
          class="bg-danger rounded border-0 text-light py-1 px-2"
          @click="deleteItem(item.id)"
        >
          <BIconTrash />
        </button>
      </div>
    </li>
  </ul>
  <div class="d-flex justify-content-end container-fluid">
    <button class="btn-add rounded px-3 py-1">
      <a href="/add" class="text-light text-center">Add</a>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useNotesStore } from "../stores/notes.store.js";

const notesStore = useNotesStore();

const notes = ref([]);
const search = ref("");

const deleteItem = (id) => {
  notesStore.deleteNote(id);
  notes.value = notesStore.getNotes; // panggil state terbaru
};

const handleSort = () => {
  const sortNotes = notesStore.sortByName;
  notes.value = sortNotes;
};

const searchNote = () => {
  const filter = notes.value.filter((note) => {
    return note.title.toLowerCase().includes(search.value.toLowerCase());
  });
  if (search.value === "") {
    return (notes.value = notesStore.getNotes);
  }
  if (filter.length === 0) {
    return (notes.value = notesStore.getNotes);
  }
  return (notes.value = filter);
};
onMounted(() => {
  notes.value = notesStore.getNotes;
});
</script>
