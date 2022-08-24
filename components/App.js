import Assignments from "./Assignments.js";
import Panel from "./Panel.js";

export default {
  components: { Assignments, Panel },

  template: `
  <div class="grid gap-6">
    <Assignments></Assignments>

    <Panel>
      This is just some text with no h2 slot
    </Panel>

    <Panel>
      <template v-slot:heading>
        This is my Heading slot content.
      </template>

      <template v-slot:default>
        This is my default content.
      </template>

    </Panel>

    <Panel>
      <template v-slot:heading>
        This is my Heading slot content.
      </template>

      <template v-slot:default>
        This is my default content.
      </template>

      <template v-slot:footer>
        Hi I am a footer slot.
      </template>

    </Panel>

    <Panel theme="light">
      <template v-slot:heading>
        This is my Heading slot content.
      </template>

      <template v-slot:default>
        This is my default content.
      </template>

      <template v-slot:footer>
        Hi I am a footer slot.
      </template>

    </Panel>
  </div>
  `,
};
