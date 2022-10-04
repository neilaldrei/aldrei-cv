<template>
    <div id="app">
        <div class="container">
            <profile-picture 
                :profile-picture="details.profilePicture" 
                :name="details.firstName">
            </profile-picture>
            <v-details 
                @updateProfilePicture="profilePictureHandler">
            </v-details>
            <v-contacts></v-contacts>
            <social-media></social-media>
            <v-skills></v-skills>
            <v-experience></v-experience>
            <v-education></v-education>
            <v-portfolio></v-portfolio>
        </div>
    </div>
</template>

<script setup>
import VDetails from '@/components/DetailsComponent.vue';
import VSkills from '@/components/SkillsComponent.vue';
import ProfilePicture from '@/components/ProfilePicture.vue';
import VContacts from '@/components/Contacts.vue';
import VExperience from '@/components/ExperienceComponent.vue';
import VEducation from '@/components/EducationComponent.vue';
import VPortfolio from '@/components/PortfolioComponent.vue';
import SocialMedia from '@/components/SocialMedia.vue';
import { ref } from 'vue';

let details = ref({
    profilePicture: null,
    firstName: null,
});

let profilePictureHandler = (val) => {
    details.value = val;
}
</script>