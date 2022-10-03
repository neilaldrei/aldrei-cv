<template>
    <div class="portfolio">
        <div class="projects" v-for="(project, index) in projects" :key="index">
            <div class="project">
                <img :src="project.image" alt="">
            </div>
        </div>
        
        <div class="actions center-text">
            <button role="button" class="btn btn-text">
                Show all
                <span class="btn-line"></span>
            </button>
        </div>
    </div>
</template>

<script setup>
    import svc from '@/common/firebase.service';
    import { onMounted, ref } from 'vue';

    let projects = ref([]);

    onMounted ( async () => {
        projects.value = await svc.getDocuments('projects', 3, 'deployed', 'desc');
    })
</script>