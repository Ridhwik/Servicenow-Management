import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['f6b7046f938013107b3a7c5efaba10c6'],
    description:
        'Allow write for records in x_2223823_apollo_0_doctor, for users with role x_2223823_apollo_0.doctor_user.',
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'write',
    roles: ['x_2223823_apollo_0.doctor_user'],
    table: 'x_2223823_apollo_0_doctor',
})
