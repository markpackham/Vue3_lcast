import Assignment from "./Assignment.js";

export default {
  components: { Assignment },

  template: `

  <section v-show="assignments.length" class="mt-8">
    <h2 class="font-bold mb-2">
    {{title}}
    <span>({{assignments.length}})</span>
    </h2>
  
    <ul>
    <Assignment v-for="assignment in assignments" :assignment="assignment" :key="assignment.name"></Assignment>
    </ul>

  </section>
    `,

  props: {
    assignments: Array,
    title: String,
  },
};
