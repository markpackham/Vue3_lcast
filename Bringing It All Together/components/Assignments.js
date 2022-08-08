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
      assignments: [],
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

  created() {
    fetch("http://localhost:3001/assignments")
      .then((response) => response.json())
      .then((assignments) => {
        this.assignments = assignments;
      });
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
