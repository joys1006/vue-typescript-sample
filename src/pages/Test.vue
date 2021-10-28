<template>
  <div class="count-component">
    {{ number }}
    <button class="success-button" @click="click">count</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'Test'
})
export default class Test extends Vue {
  @Prop({
    default: () => {
      return false;
    }
  })
  protected readonly childrenDateEvent!: void;

  protected number = 1;

  private click(): void {
    this.number += 1;
    this.$emit('childrenDateEvent', this.number);
  }
}
</script>
