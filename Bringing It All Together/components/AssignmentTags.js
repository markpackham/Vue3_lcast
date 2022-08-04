export default {
  template: `
  <h5 class="font-bold mb-2">Tags</h5>
  <div class="flex gap-2">

  <button 
  @click="$emit('update:currentTag',tag)"
  v-for="tag in tags" 
  class="bg-slate-800 text-white rounded px-2 py-2"
  :class="{
    'text-blue-500': tag === currentTag
  }"
  >
  {{tag}}
  </button>
  
  </div>
    `,

  props: {
    initialTags: Array,
    currentTag: String,
  },

  computed: {
    tags() {
      return ["all", ...new Set(this.initialTags)];
    },
  },
};
