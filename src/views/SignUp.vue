<template>
  <form class="flex flex-col justify-between items-center h-full"
    @submit.prevent="register">
    <div class="flex flex-col justify-start items-start w-full">
      <p class="m4 mb-4">Создание аккаунта</p>
      <template v-if="!phase">
        <VSelect class="mb-8" :options="options" v-model="type"></VSelect>
        <VInput class="w-full mb-6"
          placeholder="Наименование" v-model="fullName"></VInput>
        <VInput class="w-full mb-4" type="date"
          placeholder="Дата регистрации" v-model="registrationDate"></VInput>
        <VInput class="w-full mb-4"
          placeholder="ОГРН" v-model="mainRegisterNumber"></VInput>
        <VInput class="w-full mb-6"
          placeholder="Регистрирующий орган" v-model="registrationCompany"></VInput>
        <VInput class="w-full mb-8"
          placeholder="Свидетельство о регистрации" v-model="regpaperNumb"></VInput>
      </template>
      <template v-else>
        <VInput class="w-full mb-6"
          placeholder="Электронная почта" v-model="email"></VInput>
        <VInput class="w-full mb-4"
          placeholder="Пароль" type="password" v-model="password"></VInput>
        <VInput class="w-full mb-4"
          placeholder="Повторите пароль" type="password" v-model="secondPassword"></VInput>
      </template>
    </div>
    <VButton class="self-center justify-self-end mb-16">Продолжить</VButton>
  </form>
</template>

<script>
import { reactive, toRefs, ref } from 'vue';
import { useRouter } from 'vue-router';

import VSelect from '@/components/VSelect.vue';
import VInput from '@/components/VInput.vue';
import VButton from '@/components/VButton.vue';

import { useActions, actionsMap } from '@/store/index';

export default {
  name: 'SignUp',
  components: {
    VSelect,
    VInput,
    VButton,
  },
  setup() {
    const { push } = useRouter();

    const actions = useActions([actionsMap.register, actionsMap.authenticate]);

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

    const phase = ref(false);

    const form = reactive({
      fullName: '',
      registrationDate: '',
      mainRegisterNumber: '',
      registrationCompany: '',
      regpaperNumb: '',
      email: '',
      password: '',
      type: options[0].value,
    });

    const secondPassword = ref('');

    const register = async () => {
      if (phase.value === true) {
        console.log(form);
        if (form.password !== secondPassword.value) {
          // TODO: Create valid error message in the interface
          console.log('Invalid');
          return;
        }
        try {
          await actions.register(form);
          await actions.authenticate({
            email: form.email,
            password: form.password,
          });
          await push('/wallet');
        } catch (ex) {
          console.error(ex);
        }
      } else {
        phase.value = true;
      }
    };

    return {
      ...toRefs(form),
      options,
      register,
      phase,
      secondPassword,
    };
  },
};
</script>
