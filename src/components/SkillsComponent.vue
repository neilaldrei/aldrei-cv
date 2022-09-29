<template>
    <div class="skills f-col center-text">
        <div class="social-media-item" v-for="(skill, i) in skills" :key="i">
            <div :style="`color: ${skill.avatarColor};`">
                <i :class="`mdi ${skill.icon} mdi-36px icon-hover`"></i>
            </div>
        </div>
    </div>
</template>

<script setup>
    import svc from '@/common/firebase.service';
    import { onMounted, ref } from 'vue';
    
    let skills = ref([]);
    
    onMounted ( async () => {
        skills.value = await svc.getDocuments('skills', 10, 'progress', 'desc');
    })
</script>