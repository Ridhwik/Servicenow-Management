import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['b214a8ef934c13107b3a7c5efaba10c4'],
    description: 'Allow read for records in x_2223823_apollo_0_beds, for users with role x_2223823_apollo_0.beds_user.',
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'read',
    roles: ['x_2223823_apollo_0.beds_user'],
    table: 'x_2223823_apollo_0_beds',
})
