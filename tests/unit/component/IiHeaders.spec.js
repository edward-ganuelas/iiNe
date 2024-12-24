import { assert, expect, test } from 'vitest'
import IiHeaders from '@/components/iiHeaders.vue'
import { mount } from '@vue/test-utils'

test('it mounts', () => {
    const wrapper = mount(IiHeaders, {
        props: {
            headingType: '1'
        },
        slots: {
            default: 'Heading'
        }
    })

    assert.isOk(wrapper)
    expect(wrapper.text()).toContain('Heading')
})
