<template>
  <div class="flex flex-col justify-between items-center">
    <img class="mb-28" src="@/assets/images/nsd.svg"/>
    <div class="flex flex-col items-start w-full mb-20">
      <VInput class="w-full mb-4" placeholder="Логин"></VInput>
      <VInput class="w-full mb-2.5" placeholder="Пароль" type="password"></VInput>
      <a class="r1 ml-4 text-red">Забыли пароль?</a>
    </div>
    <VButton class="mb-7">Вход</VButton>
    <a class="r1 text-red">Создать аккаунт</a>
  </div>
</template>

<script>
import VInput from '@/components/VInput.vue';
import VButton from '@/components/VButton.vue';

export default {
  name: 'SignIn',
  components: {
    VInput,
    VButton,
  },
};
</script>
