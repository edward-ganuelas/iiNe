<script setup>
import { useCssClass } from '@/composables/useCssClass';

const props = defineProps({
    classes: {
        type: Array,
        default: () => []
    },
    dataTestId: {
        type: [String, Object],
        default: () => null
    }
})

const defaultClasses = Object.freeze([
    'mb-1',
    'text-base',
    'font-normal'
]);

const { classes } = useCssClass(props, defaultClasses)

</script>

<template>
    <p :class="classes" :data-test-id="dataTestId">
        <slot />
    </p>
</template>