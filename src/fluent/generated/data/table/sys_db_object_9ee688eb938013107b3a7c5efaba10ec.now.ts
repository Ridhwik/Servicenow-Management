import { ReferenceColumn, StringColumn, Table } from '@servicenow/sdk/core'

export const x_2223823_apollo_0_doctor = Table({
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
    autoNumber: {
        prefix: 'DOC',
    },
    index: [
        {
            name: 'index',
            unique: false,
            element: 'user',
        },
    ],
    label: 'Doctor',
    name: 'x_2223823_apollo_0_doctor',
    schema: {
        number: StringColumn({
            attributes: {
                ignore_filter_on_new: true,
            },
            default: 'javascript:global.getNextObjNumberPadded();',
            label: 'Employee ID',
            maxLength: 40,
            readOnly: true,
            readOnlyOption: 'display_read_only',
        }),
        user: ReferenceColumn({
            maxLength: 32,
            referenceTable: 'sys_user',
        }),
        registration_number: StringColumn({
            label: [
                {
                    label: 'Medical Council registration no.',
                    plural: '',
                },
            ],
            maxLength: 40,
        }),
    },
    createAccessControls: true,
})
