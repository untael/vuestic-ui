<template>
  <docs-content :config="configComputed"/>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import DocsContent from '../../components/DocsContent.vue'
import switchConfig from '../../components/page-configs/ui-elements/va-switch/page-config'

@Component({
  components: {
    DocsContent,
  },
})
export default class Switch extends Vue {
  get configComputed () {
    return switchConfig
  }
}
</script>
