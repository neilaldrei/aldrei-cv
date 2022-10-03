<script setup>
import VDetails from '@/components/DetailsComponent.vue';
import VSkills from '@/components/SkillsComponent.vue';
import ProfilePicture from '@/components/ProfilePicture.vue';
import VContacts from '@/components/Contacts.vue';
import VExperience from '@/components/ExperienceComponent.vue';
import VEducation from '@/components/EducationComponent.vue';
import VPortfolio from '@/components/PortfolioComponent.vue';
import SocialMedia from '@/components/SocialMedia.vue';

let profilePictureHandler = (val) => {
    console.log('profilePicture =>',val.value.ProfilePicture)
}
</script>

<template>
    <div id="app">
        <div class="container">
            <profile-picture @updateProfilePicture="profilePictureHandler"></profile-picture>
            <v-details></v-details>
            <v-contacts></v-contacts>
            <social-media></social-media>
            <v-skills></v-skills>
            <v-experience></v-experience>
            <v-education></v-education>
            <v-portfolio></v-portfolio>
        </div>
    </div>
</template>