<template>
    <div>
        <button class="accordion--heading" @click="toggleContent">
            <heading size="medium" :text="heading"/>
            <arrow :class="arrowClass" width="18px" height="18px"/>
        </button>
        <div :class="contentClass">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import Heading from '../Heading';
import Arrow from '../../assets/svg/Arrow.vue';

export default {
    name: 'accordion',
    components: { Heading, Arrow },
    props: {
        heading: String,
        openOnLoad: Boolean,
    },
    data() {
        return {
            isOpen: false,
        };
    },
    mounted() {
        this.openOnLoad && this.toggleContent()
    },
    computed: {
        arrowClass() {
            const className = 'accordion--arrow';
            return this.isOpen ? `${className} ${className}--active` : className;
        },
        contentClass() {
            const className = 'accordion--content';
            return this.isOpen ? `${className} ${className}--active` : className;
        },
    },
    methods: {
        toggleContent() {
            this.isOpen = !this.isOpen;
        },
    },
};
</script>

<style scoped>
.accordion--heading {
    display: flex;
    justify-content: center;
    width: calc(100% - 16px);
    background-color: white;
    border: none;
    border-bottom: 1px solid lightgrey;
    outline: none;
    cursor: pointer;
    align-items: center;
    padding: 16px 0 8px;
    margin: 16px auto 0;
}

.accordion--heading:focus {
    outline: none;
}

.accordion--arrow {
    transform: rotate(0);
    transition: transform 350ms ease;
    margin: 0 12px 8px;
}

.accordion--arrow--active {
    transform: rotate( -180deg );
    transition: transform 350ms ease;
}

.accordion--content {
    text-align: center;
    max-height: 0;
    overflow-y: hidden;
    transition: max-height 500ms ease-in-out;
    max-width: none;
    margin: 16px;
}

@media (min-width: 768px) {
    .accordion--content {
        max-width: 90%;
        margin:  16px auto;
    }
}

.accordion--content--active {
    max-height: 2000px;
}
</style>
