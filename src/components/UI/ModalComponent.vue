<template>
    <div class="dialog-container center-text">
      <button class="btn">{{ props.btnName }}</button>
    </div>

    <div class="overlay" v-if="isOpen">
        <div class="modal">
            <p class="message">Look at this fancy pop-up</p>
            <div class="options">
                <button class="btn" @click="isOpen = !isOpen">Yes</button>
                <button class="btn" @click="isOpen = !isOpen">No</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['btnName']);

const isOpen = ref(false);
</script>