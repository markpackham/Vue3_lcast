import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
  components: { AssignmentList, AssignmentCreate },
  template: `
  <section class="space-y-6">
    <AssignmentList :assignments="filters.inProgressAssignments" title="In Progress"></AssignmentList>
    <AssignmentList :assignments="filters.completedAssignments" title="Completed"></AssignmentList>

    <AssignmentCreate @add="add"></AssignmentCreate>

    </section>
    `,

  data() {
    return {
      assignments: [
        {
          name: "Finish project",
          complete: false,
          tag: "latin",
        },
        {
          name: "Read chapter 4",
          complete: false,
          tag: "latin",
        },
        {
          name: "Drink petrol",
          complete: false,
          tag: "art",
        },
        {
          name: "Say cat ate my homework",
          complete: false,
          tag: "history",
        },
      ],
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
    add(name) {
      if (name.length > 0) {
        this.assignments.push({
          name: name,
          complete: false,
        });
      }
      this.newAssignment = "";
    },
  },
};
