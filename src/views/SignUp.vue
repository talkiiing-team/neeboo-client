<template>
  <form class="flex flex-col justify-between items-center h-full"
    @submit.prevent="register">
    <div class="flex flex-col justify-start items-start w-full">
      <p class="m4 mb-4">Создание аккаунта</p>
      <template v-if="!phase">
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
      </template>
      <template v-else>
        <VInput class="w-full mb-6"
          placeholder="Логин" v-model="login"></VInput>
        <VInput class="w-full mb-4"
          placeholder="Пароль" type="password" v-model="password"></VInput>
        <VInput class="w-full mb-4"
          placeholder="Повторите пароль" type="password" v-model="secondPassword"></VInput>
        <div>
          <p>Вы пидор</p>
        </div>
      </template>
    </div>
    <VButton class="self-center justify-self-end mb-16">Продолжить</VButton>
  </form>
</template>

<script>
import { reactive, toRefs, ref } from 'vue';

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
    const actions = useActions([actionsMap.register]);

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
      surname: '',
      name: '',
      patronymic: '',
      companyName: '',
      registrationDate: '',
      orgnip: '',
      registrator: '',
      regPaperId: '',
      login: '',
      password: '',
    });

    const secondPassword = ref('');

    const register = async () => {
      if (phase.value === true) {
        console.log(form);
        if (form.password.value !== secondPassword.value) {
          // toggle сообщение что мы обьебались с паролями
          return;
        }
        try {
          await actions.register(form);
        } catch (ex) {
          console.error(ex);
        }
      } else {
        phase.value = true;
      }
    };

    const selected = ref(options[0].value);

    return {
      ...toRefs(form),
      options,
      selected,
      register,
      phase,
      secondPassword,
    };
  },
};
</script>
