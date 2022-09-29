<template>
    <div class="portfolio">
        portfolio
        <div class="projects" v-for="(n, index) in 9" :key="index">
            <div class="project"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PortfolioComponent",
}
</script>

<style>

</style>