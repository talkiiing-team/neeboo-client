<template>
  <div class="mb-7 w-full flex flex-col justify-between items-start border-1 border-gray-light
    py-4 px-6 rounded-2xl shadow-outer-xl"
    @click="openWallet">
    <p class="m3 mb-8">{{ wallet.name }}</p>
    <div class="flex flex-row justify-between items-center w-full">
      <p class="m4">{{ wallet.networth }} ₽</p>
      <p class="m2">{{ wallet.count }} токенов</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WalletsListItem',
  props: {
    wallet: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const openWallet = () => {
      console.log(`openWallet ${props.wallet.name}`);
    };

    return {
      openWallet,
    };
  },
};
</script>
