<template>
  <div id="Home">
    <test @childrenDateEvent="childrenDateEvent" />
  </div>
</template>

<script lang="ts">
import Test from '../Test.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'Home',
  components: {
    Test
  }
})
export default class Home extends Vue {
  public childrenDateEvent(children: number) {
    console.log(children);
  }
}
</script>
