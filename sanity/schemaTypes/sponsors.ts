import { MdAttachMoney } from "react-icons/md";

export default {
    name: 'sponsor',
    title: 'Sponsors',
    type: 'document',
    icon: MdAttachMoney,
    fields: [
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true
        },
        {
            name: "name",
            title: "Name",
            type: "string"
        },
        {
            name: "link",
            title: "Link",
            type: "string"
        },
        {
            name: "tier",
            title: "Tier",
            type: "string",
            options: {
                list: [
                    { title: 'Platinum', value: 'platinum' },
                    { title: 'Gold', value: 'gold' },
                    { title: 'Silver', value: 'silver' },
                    { title: "Bronze", value: "bronze" },
                    { title: "None", value: "none" }
                ],
                layout: 'radio'
            }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'tier',
            media: 'image',
        },
    },
    orderings: [
        {
            title: 'Order',
            name: 'order',
            by: [
                { field: 'order', direction: 'asc' }
            ]
        },
        {
            title: 'Name',
            name: 'name',
            by: [
                { field: 'name', direction: 'asc' }
            ]
        },
    ]
}