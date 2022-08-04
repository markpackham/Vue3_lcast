import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
  components: { AssignmentList, AssignmentCreate },
  template: `
  <section class="space-y-6">
    <AssignmentList :assignments="filters.inProgressAssignments" title="In Progress"></AssignmentList>
    <AssignmentList :assignments="filters.completedAssignments" title="Completed"></AssignmentList>

    <AssignmentCreate></AssignmentCreate>

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
    },
  },
};
