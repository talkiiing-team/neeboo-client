<template>
  <div class="grid grid-cols-2 w-full gap-x-3 gap-y-6">
    <TokensListItem v-for="token in tokens" :key="token.name" :token="token"/>
  </div>
</template>

<script>
import TokensListItem from '@/components/TokensListItem.vue';

export default {
  name: 'TokensList',
  components: {
    TokensListItem,
  },
  props: {
    tokens: {
      type: Array,
      required: true,
    },
  },
};
</script>
