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

test('primary button color would be blue', () => {
    const wrapper = mount(IiButton, {
        props: {
            label: 'test',
            ariaLabel: 'test aria label',
            primary: true
        }
    })

    assert.isOk(wrapper)
    expect(wrapper.text()).toContain('test')
    expect(wrapper.attributes('aria-label')).toBe('test aria label')
    expect(wrapper.classes()).toContain('bg-blue')
    expect(wrapper.classes('bg-orange')).toBe(false)
})

test('primary false button color should be orange', () => {
    const wrapper = mount(IiButton, {
        props: {
            label: 'test',
            ariaLabel: 'test aria label',
            primary: false
        }
    })

    assert.isOk(wrapper)
    expect(wrapper.text()).toContain('test')
    expect(wrapper.attributes('aria-label')).toBe('test aria label')
    expect(wrapper.classes('bg-blue')).toBe(false)
    expect(wrapper.classes('bg-orange')).toBe(true)
})

test('prop classes should be added to the button\'s class', () => {
    const wrapper = mount(IiButton, {
        props: {
            label: 'test',
            ariaLabel: 'test aria label',
            primary: false,
            classes: ['testClass']
        }
    })

    assert.isOk(wrapper)
    expect(wrapper.text()).toContain('test')
    expect(wrapper.attributes('aria-label')).toBe('test aria label')
    expect(wrapper.classes('bg-blue')).toBe(false)
    expect(wrapper.classes('bg-orange')).toBe(true)
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