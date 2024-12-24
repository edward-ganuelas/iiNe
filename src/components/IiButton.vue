<script setup>
import { useCssClass } from '@/composables/useCssClass';

const emits = defineEmits(['onClick'])
const props = defineProps({
    label: {
        type: String,
        required: true
    },
    ariaLabel: {
        type: String,
        required: true
    },
    classes: {
        type: Array,
        default: () => []
    },
    primary: {
        type: Boolean,
    }
})


const defaultClasses = Object.freeze([
    'py-2',
    'px-7',
    'rounded-full',
    'border-neutral-700',
    'border'
]);

const { classes } = useCssClass(props, defaultClasses)

</script>

<template>
    <button
    :aria-label="props.ariaLabel"
    @click="() => emits('onClick')"
    :class="classes"
    >
    {{ props.label }}
    </button>
</template>