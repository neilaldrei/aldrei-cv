<template>
    <div class="portfolio">
        portfolio
        <div class="projects" v-for="(n, index) in 9" :key="index">
            <div class="project"></div>
        </div>
    </div>
</template>

<script setup>
    let webApps = [
        {
            title: "MAADDS Enterprise",
            description: "A promotion website for NCF Students that will be used to promote their product for their thesis.",
            image: "../assets/images/maadds.webp",
            url: "https://maaddsenterprise.firebaseapp.com/",
            deployed: "JUNE 2018",
        },
        {
            title: "Triton Swim Club",
            description: "A Web App for promoting, managing athletes and marketplace for their swimming equipments.",
            image: "../assets/images/triton.webp",
            url: "http://triton-swim-club.herokuapp.com/",
            deployed: "OCT 2018",
        },
        {
            title: "Anchovies Lumpia Express",
            description: "A website for NCF students to promote their project.",
            image: "../assets/images/anchovies.webp",
            url: "https://anchovies-lumpia-enterprise.firebaseapp.com/",
            deployed: "NOV 2019",
        },
        {
            title: "NCF CBA Annex",
            description: "A promotion website to showcase the new NCF Annex building for the CBA Students.",
            image: "../assets/images/ncf-annex.webp",
            url: "https://ncf-cba-annex.firebaseapp.com/",
            deployed: "NOV 2019",
        },
        {
            title: "JTTNet Messenger",
            description: "A messaging app to manage payment status of applicant's reference number",
            image: "../assets/images/jttnet.webp",
            url: "http://flippy-dippy.herokuapp.com/",
            deployed: "DEC 2019",
        },
        {
            title: "Starshop",
            description: "A web & mobile app for online selling and other delivery services.",
            image: "../assets/images/shoppers.webp",
            url: "http://nshop.herokuapp.com/",
            deployed: "JULY 2020",
        },
        {
            title: "JJ AQUAFRANCIA",
            description: "A web app for payroll and taking customer orders.",
            image: "../assets/images/ss.webp",
            url: "http://jjaquafrancia.herokuapp.com/",
            deployed: "AUGUST 2020",
        },
    ];

    console.log(webApps);
</script>

<style>

</style>