export default {
  template: `

  <section v-show="assignments.length" class="mt-8">
    <h2 class="font-bold mb-2">{{title}}</h2>
  
    <ul>
        <li v-for="assignment in assignments" :key="assignment.name">
            <label>{{assignment.name}}
                <input type="checkbox" v-model="assignment.complete">
            </label>
        </li>
    </ul>
  </section>
    `,

  props: {
    assignments: Array,
    title: String,
  },
};
