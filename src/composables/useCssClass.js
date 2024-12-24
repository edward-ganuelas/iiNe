import { computed } from 'vue';

export function useCssClass(props, defaultClasses) {
	const classes = computed(() => {
		return [
			...defaultClasses,
			props.classes
		]
	})
	return {
		classes
	}
}