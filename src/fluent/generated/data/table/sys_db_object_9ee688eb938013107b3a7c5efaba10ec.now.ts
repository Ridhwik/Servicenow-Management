import { ReferenceColumn, StringColumn, Table, BooleanColumn, GenericColumn, IntegerColumn } from '@servicenow/sdk/core'

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
            name: 'index3',
            unique: false,
            element: 'user',
        },
        {
            name: 'index',
            unique: false,
            element: 'ipd_visit_schedule',
        },
        {
            name: 'index2',
            unique: false,
            element: 'opd_schedule',
        },
        {
            name: 'index4',
            unique: false,
            element: 'video_schedule',
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
            label: 'Medical Council registration no.',
            maxLength: 40,
        }),
        on_cover: BooleanColumn({
            label: [
                {
                    label: 'Temporarily assigned',
                    plural: '',
                },
            ],
            maxLength: 40,
            readOnly: true,
            readOnlyOption: 'display_read_only',
        }),
        primary_hospital: StringColumn({
            label: [
                {
                    label: 'Primary hospital',
                    plural: '',
                },
            ],
            maxLength: 40,
        }),
        qualifications: StringColumn({
            label: [
                {
                    plural: '',
                },
            ],
            maxLength: 40,
        }),
        ipd_visit_schedule: ReferenceColumn({
            label: [
                {
                    label: 'IPD visit schedule',
                    plural: '',
                },
            ],
            maxLength: 32,
            referenceTable: 'cmn_schedule',
        }),
        opd_duration: IntegerColumn({
            default: '15',
            label: [
                {
                    label: 'OPD duration (minutes)',
                    plural: '',
                },
            ],
            maxLength: 255,
        }),
        registration_no: StringColumn({
            label: [
                {
                    label: 'Medical Council registration no.',
                    plural: '',
                },
            ],
            maxLength: 30,
        }),
        status: IntegerColumn({
            default: '1',
            choices: {
                1: {
                    label: 'Active',
                    sequence: 0,
                },
                2: {
                    label: 'On Leave',
                    sequence: 1,
                },
                3: {
                    label: 'Inactive',
                    sequence: 2,
                },
            },
            dropdown: 'dropdown_without_none',
            label: [
                {
                    plural: '',
                },
            ],
            maxLength: 40,
        }),
        video_schedule: ReferenceColumn({
            label: [
                {
                    label: 'Video timings',
                    plural: '',
                },
            ],
            maxLength: 32,
            referenceTable: 'cmn_schedule',
        }),
        video_duration: IntegerColumn({
            default: '15',
            label: [
                {
                    label: 'Video duration (minutes)',
                    plural: '',
                },
            ],
            maxLength: 255,
        }),
        phone: GenericColumn({
            columnType: 'phone_number_e164',
            label: [
                {
                    plural: '',
                },
            ],
            maxLength: 40,
        }),
        opd_enabled: BooleanColumn({
            label: [
                {
                    label: 'OPD enabled',
                    plural: '',
                },
            ],
            maxLength: 40,
        }),
        email: StringColumn({
            label: [
                {
                    plural: '',
                },
            ],
            maxLength: 40,
        }),
        video_enabled: BooleanColumn({
            label: [
                {
                    label: 'Video enabled',
                    plural: '',
                },
            ],
            maxLength: 40,
        }),
        opd_fee: GenericColumn({
            columnType: 'currency',
            label: [
                {
                    label: 'OPD fee',
                    plural: '',
                },
            ],
            maxLength: 40,
        }),
        opd_schedule: ReferenceColumn({
            label: [
                {
                    label: 'OPD timings',
                    plural: '',
                },
            ],
            maxLength: 32,
            referenceTable: 'cmn_schedule',
        }),
        video_fee: GenericColumn({
            columnType: 'currency',
            label: [
                {
                    label: 'Video fee',
                    plural: '',
                },
            ],
            maxLength: 40,
        }),
        specialty: StringColumn({
            label: [
                {
                    plural: '',
                },
            ],
            maxLength: 40,
        }),
        department: StringColumn({
            label: [
                {
                    plural: '',
                },
            ],
            maxLength: 40,
        }),
    },
    createAccessControls: true,
    dbObjectId: true,
})
