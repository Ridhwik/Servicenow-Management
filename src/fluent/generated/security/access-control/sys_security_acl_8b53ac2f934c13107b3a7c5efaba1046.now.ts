import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['8b53ac2f934c13107b3a7c5efaba1046'],
    description:
        'Allow write for records in x_2223823_apollo_0_hospital, for users with role x_2223823_apollo_0.hospital_user.',
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'write',
    roles: ['x_2223823_apollo_0.hospital_user'],
    table: 'x_2223823_apollo_0_hospital',
})
