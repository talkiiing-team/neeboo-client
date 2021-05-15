<template>
  <div class="flex flex-col justify-start items-start">
    <h1 class="font-montserrat font-bold font-size text-3xl leading-7">{{ networth }} $</h1>
    <h2 class="m4">Счета:</h2>
    <div class="">

    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Wallet',
  components: {

  },
  setup() {
    const networth = ref(1337228);

    const assets = ref([
      {

      },
      {

      },
    ]);

    return {
      networth,
      assets,
    };
  },
};
</script>
