<template>
    <div class="profile-picture">
        <img :src="pogi" alt="" />
    </div>
</template>

<script>
import PogiNeilAldreiLoveLoveSharmaine from '@/assets/images/pogi.png';

export default {
    name: "ProfilePicture",
    data () {
        return {
            pogi: PogiNeilAldreiLoveLoveSharmaine
        }
    }
}
</script>