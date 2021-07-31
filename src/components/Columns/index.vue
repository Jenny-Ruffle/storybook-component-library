<template>
  <div class="column--container">
    <div :class="classes" :style="style">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Columns',
    props: {
        mobileColumns: {
            type: Boolean,
            default: false,
        },
        centerVertically: {
            type: Boolean,
            default: false,
        },
        type: {
            type: String,
            default: 'one',
            validator: function(value) {
                return (
                    ['one', 'two', 'three', 'four', 'sixty-forty', 'forty-sixty'].indexOf(
                        value,
                    ) !== -1
                );
            },
        },
    },
    computed: {
        classes() {
            return {
                [`${this.type}--column`]: true,
                [`single-column--mobile`]: !this.mobileColumns,
                [`multi-column--mobile`]: this.mobileColumns,
            };
        },
        style() {
            return {
                flexDirection: this.reverseMobile ? 'column-reverse' : 'column',
                alignItems: this.centerVertically ? 'center' : '',
            };
        },
    },
};
</script>

<style scoped>
.column--container {
    display: block;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0;
}

.single-column--mobile {
    display: flex;
    flex-direction: column ;
    justify-content: flex-start;
}

.multi-column--mobile {
    display: grid;
}

@media (min-width: 768px){
    .single-column--mobile {
        display: grid;
    }
}

.one--column {
    grid-template-columns: repeat(1, 1fr);
}

.two--column {
    grid-template-columns: repeat(2, 1fr);
}

.three--column {
    grid-template-columns: repeat(3, 1fr);
}

.four--column {
    grid-template-columns: repeat(4, 1fr);
}

.sixty-forty--column {
    grid-template-columns: 60% 40%;
}

.forty-sixty--column {
    grid-template-columns: 40% 60%;
}

</style>
