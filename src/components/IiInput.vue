<script setup>
import { useCssClass } from '@/composables/useCssClass';
const props = defineProps({
    inputType: {
        type: String,
        default: 'text'
    },
    classes: {
        type: Array,
        default: () => []
    },
    ariaLabelledById: {
        type: String
    },
    id: {
        type: String
    },
    name: {
        type: String
    },
    dataTestId: {
        type: [String, Object],
        default: () => null
    }
})
const emits = defineEmits(['onChange']);

const defaultClasses = Object.freeze([
    'border-black',
    'rounded',
    'border-solid',
    'border',
    'p-1'
])

const { classes } = useCssClass(props, defaultClasses);

</script>

<template>
    <input
        :class="classes"
        :aria-labelledby="ariaLabelledById"
        :type="inputType" @change="() => emits('onChange')"
        :data-test-id="dataTestId"/>
</template>