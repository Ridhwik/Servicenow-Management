import { BooleanColumn, StringColumn, Table } from '@servicenow/sdk/core'

export const x_2223823_apollo_0_qualification = Table({
    actions: {
        read: true,
        update: false,
        delete: false,
        create: false,
    },
    allowClientScripts: false,
    allowConfiguration: false,
    allowNewFields: false,
    allowUiActions: false,
    allowWebServiceAccess: true,
    attributes: {
        enforce_dot_walk_cross_scope_access: true,
    },
    label: 'Qualification',
    name: 'x_2223823_apollo_0_qualification',
    schema: {
        active: BooleanColumn({
            default: true,
            maxLength: 40,
        }),
        name: StringColumn({
            mandatory: true,
            maxLength: 60,
        }),
    },
})
