<template>
  <form class="flex flex-col justify-between items-center" @submit.prevent="authenticate">
    <img class="mb-28 h-16" alt="NSD logotype" src="@/assets/images/nsd.svg"/>
    <div class="flex flex-col items-start w-full mb-20">
      <VInput class="w-full mb-4" placeholder="Электронная почта"
        v-model="email"></VInput>
      <VInput class="w-full mb-2.5" placeholder="Пароль" type="password"
        v-model="password"></VInput>
      <a class="r1 ml-4 text-red">Забыли пароль?</a>
    </div>
    <VButton class="mb-7">Вход</VButton>
    <router-link to="/signup" class="r1 text-red">Создать аккаунт</router-link>
  </form>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import VInput from '@/components/VInput.vue';
import VButton from '@/components/VButton.vue';
import { useActions, actionsMap } from '@/store';

export default {
  name: 'SignIn',
  components: {
    VInput,
    VButton,
  },
  setup() {
    const { push } = useRouter();
    const actions = useActions([actionsMap.authenticate]);
    const form = reactive({
      email: '',
      password: '',
    });
    const authenticate = async () => {
      try {
        await actions.authenticate(form);
        await push('/wallet');
      } catch (e) {
        console.log(e);
      }
    };
    return {
      ...toRefs(form),
      authenticate,
    };
  },
};
</script>
