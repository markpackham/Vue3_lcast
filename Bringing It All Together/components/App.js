export default {
  template: `
  <section>
  <h2 class="font-bold mb-2">In Progress</h2>

  <ul>
      <li v-for="assignment in inProgressAssignments" :key="assignment.name">
          <label>{{assignment.name}}

              <input type="checkbox" v-model="assignment.complete">
          </label>
      </li>
  </ul>
</section>

<section v-show="completedAssignments.length" class="mt-8">
  <h2 class="font-bold mb-2">Completed</h2>

  <ul>
      <li v-for="assignment in completedAssignments" :key="assignment.name">
          <label>{{assignment.name}}
              <input type="checkbox" v-model="assignment.complete">
          </label>
      </li>
  </ul>
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
    inProgressAssignments() {
      return this.assignments.filter((assignments) => !assignments.complete);
    },

    completedAssignments() {
      return this.assignments.filter((assignments) => assignments.complete);
    },
  },
};
