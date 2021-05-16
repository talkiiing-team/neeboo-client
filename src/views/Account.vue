<template>
  <div class="flex flex-col justify-between items-center h-full w-full">
    <div class="flex flex-col justify-start items-start w-full">
      <h2 class="m4 mb-12">Аккаунт</h2>
      <h2 class="m4 mb-6">Данные организации</h2>
      <VInput class="w-full mb-4" :placeholder="'ООО КОМПАНИЯ'"/>
      <VInput class="w-full mb-4" :placeholder="'Дата регистрации'"/>
      <VInput class="w-full mb-4" :placeholder="'ОГРН'"/>
      <VInput class="w-full mb-4" :placeholder="'Регистрирующий орган'"/>
      <VInput class="w-full mb-4" :placeholder="'Свидетельство о регистрации'"/>
      <h2 class="m4 mb-6">Аутентификация</h2>
      <VInput class="w-full mb-4" :placeholder="'Логин'"/>
      <VInput class="w-full mb-4" :placeholder="'Пароль'" type="password"/>
    </div>
  </div>
</template>

<script>
import VInput from '@/components/VInput.vue';

export default {
  name: 'Wallet',
  components: {
    VInput,
  },
};
</script>
