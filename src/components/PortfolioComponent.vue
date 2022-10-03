<template>
    <div class="portfolio">
        <div class="projects" v-for="(project, index) in projects" :key="index">
            <div class="project">
                <img :src="project.image" alt="">
            </div>
        </div>

        <modal-component
            btn-name="Show More">
        </modal-component>
    </div>
</template>

<script setup>
    import svc from '@/common/firebase.service';
    import { onMounted, ref } from 'vue';
    import ModalComponent from './UI/ModalComponent.vue';

    let projects = ref([]);

    onMounted ( async () => {
        projects.value = await svc.getDocuments('projects', 3, 'deployed', 'desc');
    })
</script>