export default {
  template: `
  <h5 class="font-bold mb-2">Tags</h5>
  <div class="flex gap-2">
  <button 
  @click="$emit('change',tag)"
  v-for="tag in tags" 
  class="bg-slate-800 text-white rounded px-2 py-2"
  :class="{
    'text-blue-500': tag === currrentTag
  }"
  >
  {{tag}}
  </button>
  </div>
    `,

  props: {
    initialTags: Array,
    currrentTag: String,
  },

  computed: {
    tags() {
      return ["all", ...new Set(this.initialTags.map((a) => a.tag))];
    },
  },
};
