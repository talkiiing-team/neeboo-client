<template>
  <div class="flex flex-col justify-center items-center"
    @click="openToken">
    <div class="w-32 h-32 border-1
    border-gray-light py-4 px-6 rounded-2xl shadow-outer-xl">
      <p>картинка токена</p>
    </div>
    <p class="self-start w-32 mx-auto mt-4">{{ token.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'TokensListItem',
  props: {
    token: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const openToken = () => {
      console.log(`openToken ${props.token.name}`);
    };

    return {
      openToken,
    };
  },
};
</script>
