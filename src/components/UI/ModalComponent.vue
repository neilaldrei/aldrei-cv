<template>
    <div class="dialog-container center-text">
      <button class="btn" @click="isOpen = !isOpen">{{ props.btnName }}</button>
    </div>

    <div class="overlay" v-if="isOpen" @click="isOpen = false">
        <div class="modal" :style="`overflow-y: ${scrollable ? 'auto' : 'none'};`">
            <slot></slot>
            <div class="options">
                <button class="btn" @click="isOpen = false">Nice!</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['btnName', 'scrollable']);

const isOpen = ref(false);
</script>