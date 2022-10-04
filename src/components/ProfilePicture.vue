<template>
    <div class="profile-picture">
        <img :src="props.profilePicture" :title="props.name" :alt="props.name" />
    </div>
</template>

<script setup>
const props = defineProps(['profilePicture', 'name']);

console.log(props);
</script>