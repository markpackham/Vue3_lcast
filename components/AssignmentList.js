import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
  components: { Assignment, AssignmentTags },

  template: `

  <section v-show="assignments.length" class="w-60">
    <h2 class="text-xl font-bold mb-2">
    {{title}}
    <span>({{assignments.length}})</span>
    </h2>

    <assignment-tags
    v-model:currentTag="currentTag"
    :initial-tags="assignments.map(a=>a.tag)"
    ></assignment-tags>
  
    <ul>
    <Assignment v-for="assignment in filteredAssignments" :assignment="assignment" :key="assignment.name"></Assignment>
    </ul>

    <slot></slot>

  </section>
    `,

  props: {
    assignments: Array,
    title: String,
  },

  data() {
    return {
      currentTag: "all",
    };
  },

  computed: {
    filteredAssignments() {
      if (this.currentTag === "all") {
        return this.assignments;
      }

      return this.assignments.filter((a) => a.tag === this.currentTag);
    },
  },
};
