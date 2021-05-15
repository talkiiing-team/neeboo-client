<template>
  <form class="flex flex-col justify-between items-center h-full">
    <div class="flex flex-col justify-start items-start w-full">
      <a class="m4 mb-4">Создание аккаунта</a>
      <VSelect class="mb-8" :options="options" v-model="selected"></VSelect>
      <template v-if="selected == 'individual'">
        <VInput class="w-full mb-4"
          placeholder="Фамилия" v-model="surname"></VInput>
        <VInput class="w-full mb-4"
          placeholder="Имя" v-model="name"></VInput>
        <VInput class="w-full mb-6"
          placeholder="Отчество" v-model="patronymic"></VInput>
      </template>
      <template v-else>
        <VInput class="w-full mb-6"
          placeholder="Название компании" v-model="companyName"></VInput>
      </template>
      <VInput class="w-full mb-4"
        placeholder="Дата регистрации" v-model="registrationDate"></VInput>
      <VInput class="w-full mb-4"
        placeholder="ОГРНИП" v-model="orgnip"></VInput>
      <VInput class="w-full mb-6"
        placeholder="Регистрирующий орган" v-model="registrator"></VInput>
      <VInput class="w-full mb-8"
        placeholder="Свидетельство о регистрации" v-model="regPaperId"></VInput>
    </div>
    <VButton class="self-center justify-self-end mb-16">Продолжить</VButton>
  </form>
</template>

<script>
import { ref } from 'vue';

import VSelect from '@/components/VSelect.vue';
import VInput from '@/components/VInput.vue';
import VButton from '@/components/VButton.vue';

export default {
  name: 'SignUp',
  components: {
    VSelect,
    VInput,
    VButton,
  },
  setup() {
    const options = [
      {
        display: 'Индивидуальный предприниматель',
        value: 'individual',
      },
      {
        display: 'Юридическое лицо',
        value: 'legal',
      },
    ];

    const form = {
      surname: ref(''),
      name: ref(''),
      patronymic: ref(''),
      companyName: ref(''),
      registrationDate: ref(''),
      orgnip: ref(''),
      registrator: ref(''),
      regPaperId: ref(''),
    };

    const selected = ref(options[0].value);

    return {
      ...form,
      options,
      selected,
    };
  },
};
</script>
