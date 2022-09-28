<template>
    <div class="contacts" :class="$style.contacts">
        <h1>neilaldreiii@gmail.com</h1>
        <h1>+639 673 454 814</h1>
        <h1>NAGA CITY, CAMARINES SUR, PH</h1>
    </div>
</template>

<script>
export default {
    name: "ContactsComponent",
    data () {
        return {

        }
    }
}
</script>

<style module>
    .contacts h1 {
        text-align: center;
        font-size: 11pt;
        font-weight: lighter;
        text-transform: uppercase;
        letter-spacing: .2rem;
    }
</style>