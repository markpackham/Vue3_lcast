export default {
  template: `
  <div :class="{
    'w-60 p-4 border rounded-lg' : true,
    'bg-white  border-gray-300' : theme == 'light'
    'bg-gray-700  border-gray-600' : theme == 'dark',
  }">

      <h2 v-if="$slots.heading" class="text-xl font-bold mb-2">
          <slot name="heading" />
      </h2>

      <slot />

      <footer v-if="$slots.footer" class="border-gray-600 border-t mt-4 pt-4 text-sm">
      <slot name="footer"></slot>
      </footer>
  </div>
    `,

  props: {
    heading: String,
    theme: { type: String, default: "dark" },
  },
};
