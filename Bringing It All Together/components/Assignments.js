import AssignmentList from "./AssignmentList.js";

export default {
  components: { AssignmentList },
  template: `
    <AssignmentList :assignments="inProgressAssignments" title="In Progress"></AssignmentList>
    <AssignmentList :assignments="completedAssignments" title="Completed"></AssignmentList>
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
    inProgressAssignments() {
      return this.assignments.filter((assignments) => !assignments.complete);
    },

    completedAssignments() {
      return this.assignments.filter((assignments) => assignments.complete);
    },
  },
};
