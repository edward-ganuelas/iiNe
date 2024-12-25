import { assert, test } from 'vitest'
import IiInput from '@/components/iiInput.vue'
import { mount } from '@vue/test-utils'

test('it mounts', () => {
    const wrapper = mount(IiInput, {
        props: {
            label: 'test',
            ariaLabel: 'test aria label'
        }
    })

    assert.isOk(wrapper)
})