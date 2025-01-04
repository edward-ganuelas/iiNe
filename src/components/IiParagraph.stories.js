import IiParagraph from './iiParagraph.vue';

export default {
    title: 'IiParagaph',
    component: IiParagraph,
    tags: ['autodocs']
}

export const Default = {
    render: (args) => ({
        components: { IiParagraph },
        setup() {
            return { args }
        },
        template: `
            <IiParagraph>This is a paragraph</IiParagraph>
        `
    })
}
