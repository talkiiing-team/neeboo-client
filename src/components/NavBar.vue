<template>
  <div
    class="
      fixed bottom-0 left-0 w-full h-16 bg-gray-light border-t-1 border-gray-darker
      grid grid-cols-4 items-center
    "
  >
    <NavBarItem link-to="/wallet">
      <template v-slot:icon>
        <CreditCardIcon />
      </template>
      <template v-slot:label>Кошелёк</template>
    </NavBarItem>
    <NavBarItem link-to="/create">
      <template v-slot:icon>
        <ShoppingBagIcon />
      </template>
      <template v-slot:label>Выпуск</template>
    </NavBarItem>
    <NavBarItem link-to="/requests">
      <template v-slot:icon>
        <ShoppingBagIcon />
      </template>
      <template v-slot:label>Заявки</template>
    </NavBarItem>
    <NavBarItem link-to="/profile">
      <template v-slot:icon>
        <UserIcon />
      </template>
      <template v-slot:label>Профиль</template>
    </NavBarItem>
  </div>
</template>

<script>
import NavBarItem from '@/components/NavBarItem.vue';
import { UserIcon, ShoppingBagIcon, CreditCardIcon } from '@heroicons/vue/solid';

export default {
  name: 'NavBar',
  components: {
    NavBarItem, UserIcon, ShoppingBagIcon, CreditCardIcon,
  },
};
</script>
