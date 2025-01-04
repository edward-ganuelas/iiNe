<script setup>
import { useCssClass } from '@/composables/useCssClass';
import { computed } from 'vue';

const props = defineProps({
    classes: {
        type: Array,
        default: () => []
    },
    listType: {
        type: String,
        required: true,
        default: 'ul',
        validator(value) {
            return ['ul', 'ol'].includes(value)
        }
    },
    hideListStyle: {
        type: Boolean,
        default: true
    },
    dataTestId: {
        type: [String, Object],
        default: () => null
    }
})

const defaultClasses = computed(() => {
    const defaultClasses = [
        'text-base',
        'font-normal',
        'ml-2'
    ];
    if (props.hideListStyle === false) {
        defaultClasses.push(props.listType === 'ul' ? 'list-disc' : 'list-decimal')
    } else {
        defaultClasses.push('list-none')
    }
    return [...defaultClasses]
})

const { classes } = useCssClass(props, defaultClasses.value)
</script>

<template>
    <component :is="listType" :class="classes" :data-test-id="dataTestId">
        <slot />
    </component>
</template>
