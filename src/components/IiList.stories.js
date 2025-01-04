import IiList from './iiList.vue'

export default {
    title: 'IiList',
    component: IiList,
    tags: ['autodocs']
}

export const Default = {
    args: {
        listType: 'ul',
        hideListStyle: false
    },
    render: (args) => ({
        components: { IiList },
        setup() {
            return { args }
        },
        template: `
            <IiList v-bind="args">
                <li>List Item 1</l1>
            </IIList>
        `
    })
}

export const OrderedList = {
    args: {
        listType: 'ol',
        hideListStyle: false
    },
    render: (args) => ({
        components: { IiList },
        setup() {
            return { args }
        },
        template: `
            <IiList v-bind="args">
                <li>List Item 1</l1>
            </IIList>
        `
    })
}

export const UnorderedListHidden = {
    args: {
        listType: 'ul',
        hideListStyle: true
    },
    render: (args) => ({
        components: { IiList },
        setup() {
            return { args }
        },
        template: `
            <IiList v-bind="args">
                <li>List Item 1</l1>
            </IIList>
        `
    })
}