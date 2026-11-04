import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['6614a8ef934c13107b3a7c5efaba108c'],
    description:
        'Allow create for records in x_2223823_apollo_0_beds, for users with role x_2223823_apollo_0.beds_user.',
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'create',
    roles: ['x_2223823_apollo_0.beds_user'],
    table: 'x_2223823_apollo_0_beds',
})
