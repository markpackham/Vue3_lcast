import AssignmentList from "./AssignmentList.js";

export default {
  components: { AssignmentList },
  template: `
  <section class="space-y-6">
    <AssignmentList :assignments="filters.inProgressAssignments" title="In Progress"></AssignmentList>
    <AssignmentList :assignments="filters.completedAssignments" title="Completed"></AssignmentList>

    <form @submit.prevent="add">
    <div class="p-2 bg-slate-600">
    <input v-model="newAssignment" placeholder="New assignment..." />
    </div>
    <button class="p-2 bg-slate-400" type="submit">Add</button>
    </form>

    </section>
    `,

  data() {
    return {
      assignments: [
        {
          name: "Finish project",
          complete: false,
        },
        {
          name: "Read chapter 4",
          complete: false,
        },
        {
          name: "Say cat ate my homework",
          complete: false,
        },
      ],

      newAssignment: "",
    };
  },

  computed: {
    filters() {
      return {
        inProgressAssignments: this.assignments.filter(
          (assignments) => !assignments.complete
        ),
        completedAssignments: this.assignments.filter(
          (assignments) => assignments.complete
        ),
      };
    },
  },

  methods: {
    add() {
      if (this.newAssignment.length > 0) {
        this.assignments.push({
          name: this.newAssignment,
          complete: false,
        });
      }

      this.newAssignment = "";
    },
  },
};
