<script setup>
import { computed } from 'vue'
const props = defineProps({
    inputType: {
        type: String,
        default: 'text'
    },
    classes: {
        type: Array
    },
    ariaLabelledById: {
        type: String
    },
    id: {
        type: String
    },
    name: {
        type: String
    }
})
const emits = defineEmits(['onChange'])
const defaultClasses = [
    'border-black',
    'rounded',
    'border-solid',
    'border',
    'p-1'
]

const computedClasses = computed(() => {
    return [
        ...defaultClasses,
        props?.classes
    ]
})
</script>

<template>
    <input
        :class="computedClasses"
        :aria-labelledby="ariaLabelledById"
        :type="inputType" @change="() => emits('onChange')"/>
</template>