<template>
    <div class="education card">
        <div v-for="(exp, i) in educations" :key="i" class="center-text">
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

let educations = ref([]);

onMounted ( async () => {
    educations.value = await svc.getDocuments('education', 1, 'endYear', 'desc');
})
</script>