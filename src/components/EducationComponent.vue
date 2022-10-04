<template>
    <div class="education card">
        <div v-for="(exp, i) in latestEducation" :key="i" class="center-text">
            <h1 class="title">{{ exp.company }}</h1>
            <h2 class="subtitle">{{ exp.role }}</h2>
            <h4 class="overline">{{ `${date(exp.startYear)} — ${date(exp.endYear)}` }}</h4>
        </div>

        <modal-component
            :scrollable="true"
            btn-name="Show More">
            <div class="modal-body">
                <div v-for="(exp, i) in educations" :key="i">
                    <h1>{{ exp.company }}</h1>
                    <h2 class="subtitle">{{ exp.role }}</h2>
                    <h4 class="overline">{{ `${date(exp.startYear)} — ${date(exp.endYear)}` }}</h4>
                </div>
            </div>
        </modal-component>
    </div>
</template>

<script setup>
import svc from '@/common/firebase.service';
import date from '@/common/dateFilter';
import { onMounted, ref, computed } from 'vue';
import ModalComponent from './UI/ModalComponent.vue'

let educations = ref([]);

onMounted ( async () => {
    educations.value = await svc.getDocuments('education', 5, 'endYear', 'asc');
})

const latestEducation = computed(() => {
    return educations.value.slice(-1)
})
</script>