<template>
  <WalletsListItem v-for="wallet in wallets" :key="wallet.name" :wallet="wallet"/>
</template>

<script>
import WalletsListItem from '@/components/WalletsListItem.vue';

export default {
  name: 'WalletsList',
  components: {
    WalletsListItem,
  },
  props: {
    wallets: {
      type: Array,
      required: true,
    },
  },
};
</script>
