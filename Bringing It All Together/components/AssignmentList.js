import Assignment from "./Assignment.js";

export default {
  components: { Assignment },

  template: `

  <section v-show="assignments.length" class="mt-8">
    <h2 class="text-xl font-bold mb-2">
    {{title}}
    <span>({{assignments.length}})</span>
    </h2>

    <h5 class="font-bold mb-2">Tags</h5>
    <div class="flex gap-2">
    <button 
    @click="currrentTag = tag"
    v-for="tag in tags" 
    class="bg-slate-800 text-white rounded px-2 py-2"
    :class="{
      'text-blue-500': tag === currrentTag
    }"
    >
    {{tag}}
    </button>
    </div>
  
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

    tags() {
      return ["all", ...new Set(this.assignments.map((a) => a.tag))];
    },
  },
};
