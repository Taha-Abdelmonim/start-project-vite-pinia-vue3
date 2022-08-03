<template>
  <main class="home">
    <h1 class="count">{{ storeCounter.counter }}</h1>
    <h1 class="count">{{ storeCounter.oddOrEven }}</h1>
    <div class="buttons">
      <button @click="storeCounter.increment">+</button>
      <input v-model="storeCounter.counter" type="number" />
      <button @click="storeCounter.decrement">-</button>
    </div>
  </main>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";
const storeCounter = useCounterStore();
</script>

<script></script>
