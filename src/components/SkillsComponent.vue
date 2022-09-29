<template>
    <div class="skills f-col center-text">
        <div class="social-media-item" v-for="(link, i) in links" :key="i">
            <a :href="link.url" target="_blank" :style="`color: ${link.color};`">
                <i :class="`mdi ${link.icon} mdi-36px icon-hover`"></i>
            </a>
        </div>
    </div>
</template>

<script setup>
    import svc from '@/common/firebase.service';
    import { onMounted, ref } from 'vue';
    
    let skills = ref([]);
    
    onMounted ( async () => {
        skills.value = await svc.getDocuments('skills', 5, 'yrsExp', 'desc');
    })
</script>