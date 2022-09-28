<template>
    <div class="details" :class="$style.details">
        <div class="row">
            <div>
                <h2>Peralta</h2>
                <h1>Neil Aldrei</h1>
            </div>
            <h6>Web Developer</h6>
        </div>
        <p>Hard-working web developer with a flair for creating elegant solutions in the least amount of time. Developed an ecommerce webapp, employee managing webapp, resto web portal, and virtual event website. Passionate about building world class web applications and designing web pages. </p>
    </div>
</template>

<script>


export default {
    name: "DetailsComponent",
    
}
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
    
    .details h6 {
        margin: auto 0;
        font-style: italic;
        font-weight: lighter;
        font-size: 12pt;
        color: rgb(20, 19, 19);
    }
</style>