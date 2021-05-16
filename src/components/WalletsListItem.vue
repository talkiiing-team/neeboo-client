<template>
  <div class="mb-7 w-full flex flex-col justify-between items-start border-1 border-gray-light
    py-4 px-6 rounded-2xl shadow-outer-xl"
    @click="openWallet">
    <p class="m3 mb-8">{{ wallet.label }}</p>
    <div class="flex flex-row justify-between items-center w-full">
      <p class="m4">{{ wallet.cachedBalance }} $</p>
      <p class="m2">{{ wallet.assets.length }} токенов</p>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'WalletsListItem',
  props: {
    wallet: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();

    const openWallet = () => {
      console.log(`openWallet ${props.wallet.name}`);
      // eslint-disable-next-line no-underscore-dangle
      router.push(`/wallet/${props.wallet._id}`);
    };

    return {
      openWallet,
    };
  },
};
</script>
