export default {
  template: `
  <div class="w-60 bg-gray-700 p-4 border border-gray-600 rounded-lg">
      <h2 class="text-xl font-bold mb-2">
      {{ heading }}
      </h2>
  </div>
    `,

  props: {
    heading: String,
  },
};
