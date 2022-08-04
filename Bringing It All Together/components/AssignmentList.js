import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
  components: { Assignment, AssignmentTags },

  template: `

  <section v-show="assignments.length" class="mt-8">
    <h2 class="text-xl font-bold mb-2">
    {{title}}
    <span>({{assignments.length}})</span>
    </h2>

    <assignment-tags
    v-model="currentTag"
    :initial-tags="assignments.map(a=>a.tag)"
    @change="currrentTag = $event"
    ></assignment-tags>
  
    <ul>
    <Assignment v-for="assignment in filteredAssignments" :assignment="assignment" :key="assignment.name"></Assignment>
    </ul>

  </section>
    `,

  props: {
    assignments: Array,
    title: String,
  },

  data() {
    return {
      currrentTag: "all",
    };
  },

  computed: {
    filteredAssignments() {
      if (this.currrentTag === "all") {
        return this.assignments;
      }

      return this.assignments.filter((a) => a.tag === this.currrentTag);
    },
  },
};
