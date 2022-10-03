<template>
    <div class="experience card">
        <div v-for="(exp, i) in experiences" :key="i" class="center-text">
            <h1 class="title">{{ exp.company }}</h1>
            <h2 class="subtitle">{{ exp.role }}</h2>
            <h4 class="overline">{{ `${date(exp.startYear)} — ${date(exp.endYear)}` }}</h4>
        </div>

        <modal-component
            btn-name="Show More">
        </modal-component>
    </div>
</template>

<script setup>
import svc from '@/common/firebase.service';
import date from '@/common/dateFilter';
import { onMounted, ref } from 'vue';
import ModalComponent from './UI/ModalComponent.vue'

let experiences = ref([]);

onMounted ( async () => {
    experiences.value = await svc.getDocuments('experience', 1, 'endYear', 'desc');
})
</script>