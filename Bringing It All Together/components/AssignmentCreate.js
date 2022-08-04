export default {
  template: `
  <form @submit.prevent="add">
  <div class="p-2 bg-slate-600">
  <input v-model="newAssignment" placeholder="New assignment..." />
  </div>
  <button class="p-2 bg-slate-400" type="submit">Add</button>
  </form>
    `,

  data() {
    return {
      newAssignment: "",
    };
  },
  methods: {
    add() {
      //   if (this.newAssignment.length > 0) {
      //     this.assignments.push({
      //       name: this.newAssignment,
      //       complete: false,
      //     });
      //   }

      this.$emit("add", this.newAssignment);

      this.newAssignment = "";
    },
  },
};
