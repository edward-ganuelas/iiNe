import { assert, test } from 'vitest'
import IiParagaph from '@/components/iiParagraph.stories'
import { mount } from '@vue/test-utils'

test('it mounts', () => {
    const wrapper = mount(IiParagaph, {
    })

    assert.isOk(wrapper)
})