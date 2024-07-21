import { assert, test } from 'vitest'
import iiInput from '@/components/iiInput.vue'
import { mount } from '@vue/test-utils'

test('it mounts', () => {
    const wrapper = mount(iiInput, {
        props: {
            label: 'test',
            ariaLabel: 'test aria label'
        }
    })

    assert.isOk(wrapper)
})