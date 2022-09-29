<template>
    <div class="details" :class="$style.details">
        <div class="row">
            <div>
                <h2>{{ details.lastName }}</h2>
                <h1>{{ details.firstName }}</h1>
            </div>
            <h6 class="subtitle">{{ details.title }}</h6>
        </div>
        <p>{{ details.intro }}</p>
    </div>
</template>

<script setup>
    import svc from '@/common/firebase.service';
    import { onMounted, ref } from 'vue';

    let details = ref({
        title: '',
        lastName: '',
        firstName: '',
        intro: ''
    });

    onMounted( async () => {
        details.value = await svc.getDoc('me', 'gGsGpb7Wh8tQ4oZ6OMFz');
    })
</script>

<style module>
    .details h2 {
        font-size: 18pt;
        font-weight: normal;
        margin: 0;
        padding: 0;
    }

    .details h1 {
        font-size: 42pt;
        font-weight: normal;
        margin: 0;
        padding: 0;
    }

    .details p {
        margin: 1rem 0;
        font-size: 11pt;
        font-weight: normal;
        text-align: justify;
    }
</style>