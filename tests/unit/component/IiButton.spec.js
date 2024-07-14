import { assert, expect, test } from 'vitest'
import IiButton from '@/components/IiButton.vue'
import { mount } from '@vue/test-utils'

test('it mounts', () => {
    const wrapper = mount(IiButton, {
        props: {
            label: 'test',
            ariaLabel: 'test aria label'
        }
    })

    assert.isOk(wrapper)
    expect(wrapper.text()).toContain('test')
    expect(wrapper.attributes('aria-label')).toBe('test aria label')
})