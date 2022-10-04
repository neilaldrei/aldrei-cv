<template>
    <div class="experience card">
        <div v-for="(exp, i) in latestExperience" :key="i" class="center-text">
            <h1 class="title">{{ exp.company }}</h1>
            <h2 class="subtitle">{{ exp.role }}</h2>
            <h4 class="overline">{{ `${date(exp.startYear)} — ${date(exp.endYear)}` }}</h4>
        </div>
        
        <modal-component
            :scrollable="true"
            btn-name="Show More">
            <div class="modal-body">
                <div v-for="(exp, i) in experiences" :key="i">
                    <h1>{{ exp.company }}</h1>
                    <h2 class="subtitle">{{ exp.role }}</h2>
                    <h4 class="overline">{{ `${date(exp.startYear)} — ${date(exp.endYear)}` }}</h4>
                    <hr>
                    <ul v-for="(respo, i) in exp.responsibilities" :key="i">
                        <li>{{ respo }}</li>
                    </ul>
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

let experiences = ref([]);

onMounted ( async () => {
    experiences.value = await svc.getDocuments('experience', 5, 'endYear', 'asc');
})

const latestExperience = computed(() => {
    return experiences.value.slice(-1);
})
</script>