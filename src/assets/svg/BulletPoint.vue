<template>
    <svg :height="height" :width="width">
        <circle cx="5" cy="5" r="3" stroke="black" stroke-width="1" fill="white" />
    </svg> 
</template>

<script>
export default {
    props: {
        width: String,
        height: String,
    }
}
</script>