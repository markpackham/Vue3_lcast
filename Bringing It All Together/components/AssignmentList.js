import Assignment from "./Assignment.js";

export default {
  components: { Assignment },

  template: `

  <section v-show="assignments.length" class="mt-8">
    <h2 class="font-bold mb-2">
    {{title}}
    <span>({{assignments.length}})</span>
    </h2>

    <div class="flex gap-2">
    <button v-for="tag in tags" class="bg-slate-800 text-white rounded px-2 py-2">{{tag}}</button>
    </div>
  
    <ul>
    <Assignment v-for="assignment in assignments" :assignment="assignment" :key="assignment.name"></Assignment>
    </ul>

  </section>
    `,

  props: {
    assignments: Array,
    title: String,
  },

  computed: {
    tags() {
      return new Set(this.assignments.map((a) => a.tag));
    },
  },
};
