<script setup>
import { useCssClass } from '@/composables/useCssClass';
import { computed } from 'vue';

const props = defineProps({
    classes: {
        type: Array,
        default: () => []
    },
    headingType: {
        type: String,
        required: true,
        default: '1'
    },
    dataTestId: {
        type: [String, Object],
        default: () => null
    }
})

const defaultClasses = computed(() => {
    const defaultClasses = ['font-bold'];
    const headingToClassMap = {
        '1': 'text-3xl',
        '2': 'text-2xl',
        '3': 'text-xl',
        '4': 'text-lg',
        '5': 'text-base',
        '6': 'text-base'
    }
    defaultClasses.push(headingToClassMap[props.headingType])
    return defaultClasses;
})

const heading = computed(() => {
    return `h${props.headingType}`
})

const { classes } = useCssClass(props, defaultClasses.value)

</script>

<template>
    <component
        :is="heading"
        :class="classes"
        :data-test-id="dataTestId">
        <slot></slot>
    </component>
</template>