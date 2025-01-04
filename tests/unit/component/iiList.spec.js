import { assert, test, expect } from 'vitest'
import iiList from '@/components/iiList.vue'
import { mount } from '@vue/test-utils'

test('it mounts', () => {
    const wrapper = mount(iiList, {
        props: {
            listType: 'ul',
            hideListStyle: false
        },
        slots: {
            default: `<li>List Item 1</li>`
        }
    })

    assert.isOk(wrapper)
    expect(wrapper.classes()).contain('text-base')
    expect(wrapper.classes()).contain('font-normal')
    expect(wrapper.classes()).contain('ml-2')
    expect(wrapper.html()).contain('<ul')
    expect(wrapper.findAll('li').length).toBe(1)
    expect(wrapper.classes()).contain('list-disc')
})

test('it should render ordered list', () => {
    const wrapper = mount(iiList, {
        props: {
            listType: 'ol',
            hideListStyle: false
        },
        slots: {
            default: `<li>List Item 1</li>`
        }
    })

    assert.isOk(wrapper)
    expect(wrapper.classes()).contain('text-base')
    expect(wrapper.classes()).contain('font-normal')
    expect(wrapper.classes()).contain('ml-2')
    expect(wrapper.html()).contain('<ol')
    expect(wrapper.findAll('li').length).toBe(1)
    expect(wrapper.classes()).contain('list-decimal')
})


test('it should hide list style if hideListStyle is true', () => {
    const wrapper = mount(iiList, {
        props: {
            listType: 'ul',
            hideListStyle: true
        },
        slots: {
            default: `<li>List Item 1</li>`
        }
    })

    assert.isOk(wrapper)
    expect(wrapper.classes()).contain('text-base')
    expect(wrapper.classes()).contain('font-normal')
    expect(wrapper.classes()).contain('ml-2')
    expect(wrapper.html()).contain('<ul')
    expect(wrapper.findAll('li').length).toBe(1)
    expect(wrapper.classes()).contain('list-none')
})