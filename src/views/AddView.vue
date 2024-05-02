<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useNotesStore } from "../stores/notes.store.js";
const notesStore = useNotesStore();
const title = ref("");
const description = ref("");
const router = useRouter();
const submitAdd = () => {
  if (!title.value || !description.value) {
    console.log("tidak berhasil");
    alert("Input Not Empty!");
  } else {
    console.log("berhasil");
    const note = {
      id: new Date().getTime(),
      title: title.value,
      description: description.value,
    };
    notesStore.addNewNote(note);
    router.push("/");
  }
};
</script>
<template>
  <section
    class="d-flex justify-content-center align-items-center container-fluid"
  >
    <!-- <h1 class="my-5">Add page</h1> -->
    <form @submit.prevent="submitAdd" class="container-fluid">
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input
          type="text"
          class="form-control container-fluid"
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
        <button class="btn-add bg-danger rounded px-3 py-1">
          <router-link to="/" class="text-light text-center"
            >Cancel</router-link
          >
        </button>
        <button
          type="submit"
          class="btn-add rounded px-3 py-1 text-light text-center"
        >
          Add
        </button>
      </div>
    </form>
  </section>
</template>
