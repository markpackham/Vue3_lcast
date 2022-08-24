export default {
  template: `
  <div class="w-60 bg-gray-700 p-4 border border-gray-600 rounded-lg">
      <h2 v-if="$slots.heading" class="text-xl font-bold mb-2">
          <slot name="heading" />
      </h2>

      <slot />
  </div>
    `,

  props: {
    heading: String,
  },
};
