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

test('prop classes should be added to the button\'s class', () => {
    const wrapper = mount(IiButton, {
        props: {
            label: 'test',
            ariaLabel: 'test aria label',
            classes: ['testClass']
        }
    })

    assert.isOk(wrapper)
    expect(wrapper.text()).toContain('test')
    expect(wrapper.attributes('aria-label')).toBe('test aria label')
    expect(wrapper.classes('testClass')).toBe(true)
})

test('button click emits onClick', async () => {
    const wrapper = mount(IiButton, {
        props: {
            label: 'test',
            ariaLabel: 'test aria label',
            primary: true
        }
    })

    assert.isOk(wrapper)
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('onClick')
})