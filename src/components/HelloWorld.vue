<template>
  <div class="flex flex-col gap-y-3">
    <div class="text-9xl">{{ counter }}</div>
    <div @click="increment">Increment</div>
    <div @click="decrement">Decrement</div>
    <div @click="randomize">Randomize</div>
  </div>
</template>

<script>
import {
  stateMap, actionsMap, useActions, useState, mutationsMap, useMutations,
} from '@/store';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup() {
    const { counter } = useState([stateMap.counter]);
    const { increment, decrement } = useActions([actionsMap.increment, actionsMap.decrement]);
    const { setCounter } = useMutations([mutationsMap.setCounter]);

    function randomize() {
      setCounter(Math.floor(Math.random() * 100));
    }

    return {
      counter,
      increment,
      decrement,
      setCounter,
      randomize,
    };
  },
};
</script>
