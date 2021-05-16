<template>
  <form
    v-if="!ok"
    class="flex flex-col items-left gap-y-6 pb-32"
    @submit.prevent="create"
  >
    <h1 class="m4 mb-4">Выпустить новый токен</h1>
    <h2 class="m3">Название токена</h2>
    <VInput placeholder="Введите название токена" v-model="name" />
    <h2 class="m3">Изображение</h2>
    <VInput placeholder="Введите URL изображения" v-model="subject" />
    <h2 class="m3">Начальная цена</h2>
    <VInput placeholder="Введите минимальную стоимость токена"
      v-model="price" />
    <VButton class="self-center mt-8">Продолжить</VButton>
  </form>
  <div class="text-center" v-else>
    <p class="w-full text-center mb-6">
      Заявка на эмиссию выставлена.
    </p>
    <VButton @click="push('/wallet')">Окей!</VButton>
  </div>
</template>

<script>
import VButton from '@/components/VButton.vue';
import VInput from '@/components/VInput.vue';
import { reactive, ref, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { useActions } from '@/store';

export default {
  components: { VInput, VButton },
  setup() {
    const ok = ref(false);
    const { createToken } = useActions(['createToken']);
    const { push } = useRouter();
    const form = reactive({
      name: '',
      subject: '',
      price: '',
    });
    const create = async () => {
      try {
        await createToken(form);
        ok.value = true;
      } catch (e) {
        console.log(e);
      }
    };
    return {
      ...toRefs(form),
      push,
      create,
      ok,
    };
  },
};
</script>
