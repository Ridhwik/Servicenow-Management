import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['cd3660e7938c13107b3a7c5efaba1070'],
    description:
        'Allow write for records in x_2223823_apollo_0_patient, for users with role x_2223823_apollo_0.patient_user.',
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'write',
    roles: ['x_2223823_apollo_0.patient_user'],
    table: 'x_2223823_apollo_0_patient',
})
