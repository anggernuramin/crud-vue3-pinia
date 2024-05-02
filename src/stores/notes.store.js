import { defineStore } from "pinia";

export const useNotesStore = defineStore({
  id: "store",
  // daftar data/state global
  state: () => ({
    notes: [
      {
        id: 1,
        title: "Zustand",
        description: "Belajar Shallow",
      },
      {
        id: 2,
        title: "Pinia",
        description: "Pinia 3",
      },
      {
        id: 3,
        title: "Redux",
        description: "React JS Redux",
      },
      {
        id: 4,
        title: "Vuex",
        description: "Redux RTK",
      },
      {
        id: 5,
        title: "Pinia",
        description: "Belajar Pinia",
      },
    ],
  }),
  //   Digunakan untuk mendapatkan data dari state dengan cara yg telah di proses sebelum nya dan bersifat synchrnous
  getters: {
    getNotes(state) {
      return state.notes;
    },
    // getter dengan parameter id
    getNoteById: (state) => (id) => state.notes.find((note) => note.id == id),
    sortByName(state) {
      const sorting = [...state.notes];
      return sorting.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
    },
  },
  //  Digunakan untuk mengubah state secara langsung(Hanya mutation yang bisa melakukan perubahan state secara langsung) dan berjalan secara synchronous
  mutations: {
    // Pastikan mengubah data menggunakan Mutation, diaction untuk manipulasi data
    addNote: (state, newNote) => {
      console.log("tambah");
      state.notes.push(newNote);
    },
  },
  //  Digunakan untuk operasi yang berjalan ascychronous, seperti pemanggilan api dan kemudian mengubah state dengan menggunakan mutations
  actions: {
    async addNewNote(newNote) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // ubah menggunakan mutation, karena mutation yang bisa mengubah state secara langsung
      this.notes.push(newNote);
    },
    deleteNote(id) {
      this.notes = this.notes.filter((item) => {
        return item.id != id;
      });
    },
    updateNoteById(updateNote) {
      const index = this.notes.findIndex((note) => note.id == updateNote.id);
      if (index !== -1) {
        return (this.notes[index] = updateNote);
      } else {
        return (this.notes[index] = this.notes[index]);
      }
    },
    searchNote(search) {
      return this.notes.filter((note) => {
        return note.title.toLowerCase().includes(search.toLowerCase());
      });
    },
  },
});
