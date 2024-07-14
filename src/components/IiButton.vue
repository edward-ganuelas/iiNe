<script setup>
import { computed } from 'vue'
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
        type: Array
    },
    primary: {
        type: Boolean,
    }
})
const _defaultClasses = [
    'py-2',
    'px-7',
    'rounded-lg'
]

const defaultClasses = computed(() => {
    const defaultClasses = [
        ..._defaultClasses
    ]
    if (props?.primary === true) {
        defaultClasses.push('bg-blue')
    } else {
        defaultClasses.push('bg-orange')
    }

    return defaultClasses
})
const classes = computed(() => {
    return [
        ...defaultClasses.value,
        props.classes
    ]
})
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