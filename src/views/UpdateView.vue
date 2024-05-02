<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref, computed, onMounted } from "vue";
import { useNotesStore } from "../stores/notes.store.js";

const notesStore = useNotesStore();
const { id } = useRoute().params;
const router = useRouter();
const title = ref("");
const description = ref("");

const notes = computed(() => {
  return notesStore.getNoteById(id);
});

onMounted(() => {
  console.log("render pertama kali");
  if (notes.value) {
    title.value = notes.value.title;
    description.value = notes.value.description;
  }
});

const submitUpdate = () => {
  const note = {
    id,
    title: title.value,
    description: description.value,
  };
  notesStore.updateNoteById(note);
  router.push("/");
};
</script>

<template>
  <form @submit.prevent="submitUpdate" class="container-fluid">
    <div class="mb-3">
      <label for="title" class="form-label">Title</label>
      <input
        type="text"
        class="form-control"
        id="title"
        aria-describedby="emailHelp"
        value="{ title }"
        v-model="title"
      />
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Description</label>
      <input
        type="text"
        class="form-control"
        id="description"
        value="description"
        v-model="description"
      />
    </div>
    <div class="d-flex justify-content-end container-fluid gap-2">
      <router-link
        to="/"
        class="btn-add bg-danger rounded px-3 py-1 text-light text-center"
        >Cancel</router-link
      >
      <button
        class="btn-add rounded px-3 py-1 text-light text-center"
        type="submit"
      >
        Save
      </button>
    </div>
  </form>
</template>
