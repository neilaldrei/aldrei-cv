<template>
    <div id="app">
        <div class="container">
            <profile-picture></profile-picture>
            <v-details></v-details>
            <v-contacts></v-contacts>
            <v-skills></v-skills>
            <v-experience></v-experience>
            <v-education></v-education>
            <v-portfolio></v-portfolio>

            <div class="social-media">fb</div>
        </div>
    </div>
</template>

<script setup>
    import VDetails from '@/components/DetailsComponent.vue';
    import VSkills from '@/components/Skills.vue';
    import ProfilePicture from '@/components/ProfilePicture.vue';
    import VContacts from '@/components/Contacts.vue';
    import VExperience from '@/components/Experience.vue';
    import VEducation from '@/components/Education.vue';
    import VPortfolio from '@/components/Portfolio.vue';
</script>