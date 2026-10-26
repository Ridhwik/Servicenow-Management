import { BooleanColumn, ReferenceColumn, StringColumn, Table } from '@servicenow/sdk/core'

export const x_2223823_apollo_0_department = Table({
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
    index: [
        {
            name: 'index',
            unique: false,
            element: 'hod',
        },
        {
            name: 'index2',
            unique: false,
            element: 'hospital',
        },
    ],
    label: 'Department',
    name: 'x_2223823_apollo_0_department',
    schema: {
        name: StringColumn({
            mandatory: true,
            maxLength: 100,
        }),
        hod: ReferenceColumn({
            label: 'Head of department',
            maxLength: 32,
            referenceTable: 'x_2223823_apollo_0_doctor',
        }),
        hospital: ReferenceColumn({
            mandatory: true,
            maxLength: 32,
            referenceTable: 'x_2223823_apollo_0_hospital',
        }),
        active: BooleanColumn({
            default: true,
            maxLength: 40,
        }),
    },
})
