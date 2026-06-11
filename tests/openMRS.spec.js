// import { test, expect } from '@playwright/test';

// import LoginPage from '../PageObjectModel/doclogin.page.js';
// import HomePage from '../PageObjectModel/openMRShome.page.js';
// import AddPatientPage from '../PageObjectModel/addpatient.page.js';
// import AppointmentPage from '../PageObjectModel/addappointment.page.js';

// import data from '../testData/openMRS.json' with { type: 'json' };

// test('OpenMRS End-to-End Flow', async ({ page }) => {

//     // ------------------------------------------------------------------------
//     // Page Objects
//     // ------------------------------------------------------------------------
//     const login = new LoginPage(page);
//     const home = new HomePage(page);
//     const addPatient = new AddPatientPage(page);
//     const appointment = new AppointmentPage(page);

//     // ------------------------------------------------------------------------
//     // Dynamic Test Data
//     // ------------------------------------------------------------------------
//     const uniqueId = Date.now();
//     const randomDigits = Math.floor(
//         10000 + Math.random() * 90000
//     );

//     const uniquePhone = `98765${randomDigits}`;
//     const uniqueEmail = `patient_${uniqueId}@gmail.com`;

//     // ------------------------------------------------------------------------
//     // 1. Login
//     // ------------------------------------------------------------------------
//     await login.goto(data.login.url);

//     await login.login(
//         data.login.email,
//         data.login.password
//     );

//     await login.verifyLogin();

//     // ------------------------------------------------------------------------
//     // 2. Navigate to Patient Module
//     // ------------------------------------------------------------------------
//     await home.openPatientSection();
//     await home.clickAddPatient();

//     // ------------------------------------------------------------------------
//     // 3. Verify Add Patient Modal
//     // ------------------------------------------------------------------------
//     await expect(addPatient.modal).toBeVisible({
//         timeout: 10000
//     });

//     // ------------------------------------------------------------------------
//     // 4. Add Patient
//     // ------------------------------------------------------------------------
//     await addPatient.addPatient({
//         name: data.patient.name,
//         email: uniqueEmail,
//         phone: uniquePhone,
//         gender: data.patient.gender,
//         birthDate: data.patient.birthDate,
//         bloodGroup: data.patient.bloodGroup,
//         address: data.patient.address
//     });

//     // ------------------------------------------------------------------------
//     // 5. Verify Patient Creation
//     // ------------------------------------------------------------------------
//     await expect(page).toHaveURL(
//         /.*doctor\/patient/,
//         {
//             timeout: 10000
//         }
//     );

//     const duplicateEmailToast =
//         page.getByText(/duplicate email/i);

//     if (
//         await duplicateEmailToast
//             .isVisible()
//             .catch(() => false)
//     ) {
//         throw new Error(
//             'Patient creation failed due to duplicate email.'
//         );
//     }

//     // ------------------------------------------------------------------------
//     // 6. Search and Verify Patient
//     // ------------------------------------------------------------------------
//     await expect(home.searchBox).toBeVisible();

//     await home.searchBox.fill(uniquePhone);

//     await page.waitForTimeout(2000);

//     const rows = await page
//         .locator('table tbody tr')
//         .allTextContents();

//     console.log('Patient Table Rows:', rows);

//     const patientRow = page
//         .locator('table tbody tr')
//         .filter({
//             hasText: /john patient/i
//         });

//     await expect(patientRow).toBeVisible({
//         timeout: 15000
//     });

//     // Optional validations
//     await expect(patientRow)
//         .toContainText(/john patient/i);

//     await expect(patientRow)
//         .toContainText(/male/i);

//     await expect(patientRow)
//         .toContainText(/B\+/i);

//     // ------------------------------------------------------------------------
//     // 7. Navigate to Appointment Module
//     // ------------------------------------------------------------------------
//     await home.openAppointmentList();

//     // ------------------------------------------------------------------------
//     // 8. Create Appointment
//     // ------------------------------------------------------------------------
//     await appointment.openAppointmentPopup();
// await appointment.giveAppointment({
//     patientName: data.patient.name,
//     date: data.appointment.date
// });

//     // ------------------------------------------------------------------------
//     // 9. Verify Appointment Creation
//     // ------------------------------------------------------------------------
//     await appointment.verifyAppointment(
//         data.patient.name
//     );
// });
// import { test, expect } from '@playwright/test';

// import LoginPage from '../PageObjectModel/doclogin.page.js';
// import HomePage from '../PageObjectModel/openMRShome.page.js';
// import AddPatientPage from '../PageObjectModel/addpatient.page.js';
// import AppointmentPage from '../PageObjectModel/addappointment.page.js';

// import data from '../testData/openMRS.json' with { type: 'json' };

// test('OpenMRS End-to-End Flow', async ({ page }) => {

//     // ------------------------------------------------------------------------
//     // Page Objects
//     // ------------------------------------------------------------------------
//     const login = new LoginPage(page);
//     const home = new HomePage(page);
//     const addPatient = new AddPatientPage(page);
//     const appointment = new AppointmentPage(page);

//     // ------------------------------------------------------------------------
//     // Dynamic Test Data
//     // ------------------------------------------------------------------------
//     const uniqueId = Date.now();
//     const randomDigits = Math.floor(
//         10000 + Math.random() * 90000
//     );

//     const uniquePhone = `98765${randomDigits}`;
//     const uniqueEmail = `patient_${uniqueId}@gmail.com`;

//     // ------------------------------------------------------------------------
//     // 1. Login & Assert Post-Login UI state
//     // ------------------------------------------------------------------------
//     await login.goto(data.login.url);
//     await login.login(data.login.email, data.login.password);
//     await login.verifyLogin();

//     // Verification of successful dashboard landing and profile indicators
//     await expect(page.getByRole('heading', { name: /e-health management/i })).toBeVisible();
//     await expect(page.getByRole('link', { name: /welcome, Pradeep/i })).toBeVisible();
//     await expect(page.getByRole('link', { name: /Log Out/i })).toBeVisible();

//     // ------------------------------------------------------------------------
//     // 2. Navigate to Patient Module
//     // ------------------------------------------------------------------------
//     await home.openPatientSection();
    
//     // Ensure sidebar navigation context updated correctly
//     await expect(page).toHaveURL(/.*doctor\/patient/);
    
//     await home.clickAddPatient();

//     // ------------------------------------------------------------------------
//     // 3. Verify Add Patient Modal
//     // ------------------------------------------------------------------------
//     await expect(addPatient.modal).toBeVisible({ timeout: 10000 });
    
//     const patientForm = page.locator('form');

//     await expect(patientForm.getByRole('textbox', { name: 'Name' })).toBeEditable();
//     await expect(patientForm.getByRole('textbox', { name: 'Email' })).toBeEditable();

//     // ------------------------------------------------------------------------
//     // 4. Add Patient
//     // ------------------------------------------------------------------------
//     await addPatient.addPatient({
//         name: data.patient.name,
//         email: uniqueEmail,
//         phone: uniquePhone,
//         gender: data.patient.gender,
//         birthDate: data.patient.birthDate,
//         bloodGroup: data.patient.bloodGroup,
//         address: data.patient.address
//     });

//     // >>> OUTPUT RETRIEVAL: Log submitted data utilizing dynamic variables to prevent locator timeouts
//     console.log('\n==========================================');
//     console.log('            SUBMITTED FORM DATA           ');
//     console.log('==========================================');
//     console.log(`Patient Name  : ${data.patient.name}`);
//     console.log(`Patient Email : ${uniqueEmail}`);
//     console.log(`Patient Phone : ${uniquePhone}`);
//     console.log('==========================================\n');

//     // ------------------------------------------------------------------------
//     // 5. Verify Patient Creation & Intercept Server Responses
//     // ------------------------------------------------------------------------
//     await expect(page).toHaveURL(
//         /.*doctor\/patient/,
//         { timeout: 10000 }
//     );

//     const duplicateEmailToast = page.getByText(/duplicate email/i);
//     if (await duplicateEmailToast.isVisible().catch(() => false)) {
//         throw new Error('Patient creation failed due to duplicate email.');
//     }

//     // ------------------------------------------------------------------------
//     // 6. Search and Verify Patient
//     // ------------------------------------------------------------------------
//     await expect(home.searchBox).toBeVisible();
//     await home.searchBox.fill(uniquePhone);

//     const patientRow = page.locator('table tbody tr').filter({
//         hasText: new RegExp(data.patient.name, 'i') 
//     });

//     await expect(patientRow).toBeVisible({ timeout: 15000 });

//     // Validations for exact patient row records
//     await expect(patientRow).toContainText(new RegExp(data.patient.name, 'i'));
//     await expect(patientRow).toContainText(new RegExp(data.patient.gender, 'i'));

//     // >>> OUTPUT RETRIEVAL: Capture saved information directly from the search results table row
//     const savedPatientRowText = await patientRow.innerText();
//     console.log('==========================================');
//     console.log('         VERIFIED DATA FROM TABLE         ');
//     console.log('==========================================');
//     console.log(savedPatientRowText.trim());
//     console.log('==========================================\n');

//     // ------------------------------------------------------------------------
//     // 7. Navigate to Appointment Module & Assert Table Headers
//     // ------------------------------------------------------------------------
//     await home.openAppointmentList();
    
//     await expect(page).toHaveURL(/.*doctor\/appointment/);
//     await expect(page.getByRole('heading', { name: /Appointment/i, level: 3 })).toBeVisible();
//     await expect(page.getByRole('columnheader', { name: 'Patient' })).toBeVisible();

//     // ------------------------------------------------------------------------
//     // 8. Create Appointment
//     // ------------------------------------------------------------------------
//     await appointment.openAppointmentPopup();
    
//     await expect(page.getByRole('button', { name: /Save|Submit|Create/i }).first()).toBeVisible();

//     await appointment.giveAppointment({
//         patientName: data.patient.name,
//         date: data.appointment.date
//     });

//     // ------------------------------------------------------------------------
//     // 9. Verify Appointment Creation (Scoped Case-Insensitive Assertions)
//     // ------------------------------------------------------------------------
//     const appointmentRow = page.locator('table tbody tr').filter({
//         hasText: new RegExp(data.patient.name, 'i')
//     }).first();

//     await expect(appointmentRow).toBeVisible();
//     await expect(appointmentRow).toContainText(new RegExp(data.patient.name, 'i'));
//     await expect(appointmentRow).toContainText(/Pradeep/i); 
    
//     await expect(appointmentRow.getByRole('link', { name: /Delete/i })).toBeEnabled();

//     // >>> OUTPUT RETRIEVAL: Capture final metrics from the scheduled appointment entry
//     const finalAppointmentText = await appointmentRow.innerText();
//     console.log('==========================================');
//     console.log('        CREATED APPOINTMENT RECORD        ');
//     console.log('==========================================');
//     console.log(finalAppointmentText.trim());
//     console.log('==========================================\n');
// });
import { test, expect } from '@playwright/test';

import LoginPage from '../PageObjectModel/doclogin.page.js';
import HomePage from '../PageObjectModel/openMRShome.page.js';
import AddPatientPage from '../PageObjectModel/addpatient.page.js';
import AppointmentPage from '../PageObjectModel/addappointment.page.js';

import data from '../testData/openMRS.json' with { type: 'json' };

test.describe.configure({ mode: 'serial' });

const uniqueId = Date.now();
const randomDigits = Math.floor(10000 + Math.random() * 90000);

const uniquePhone = `98765${randomDigits}`;
const uniqueEmail = `patient_${uniqueId}@gmail.com`;

test.describe('OpenMRS E2E Suite', () => {

test.beforeEach(async ({ page }) => {

    const login = new LoginPage(page);

    await login.goto(data.login.url);

    await login.login(
        data.login.email,
        data.login.password
    );

    await expect(
        page.getByRole('link', { name: /log out/i })
    ).toBeVisible({ timeout: 15000 });
});

test('TC-01 : Login to OpenMRS', async ({ page }) => {

    await expect(
        page.getByRole('link', { name: /log out/i })
    ).toBeVisible();

});

test('TC-02 : Navigate to Patient Module', async ({ page }) => {

    const home = new HomePage(page);

    await home.openPatientSection();

    await expect(page)
        .toHaveURL(/doctor\/patient/);

});

test('TC-03 : Verify Add Patient Modal', async ({ page }) => {

    const home = new HomePage(page);
    const addPatient = new AddPatientPage(page);

    await home.openPatientSection();

    await home.clickAddPatient();

    await expect(addPatient.modal)
        .toBeVisible({ timeout: 10000 });

});

test('TC-04 : Add New Patient', async ({ page }) => {

    const home = new HomePage(page);
    const addPatient = new AddPatientPage(page);

    await home.openPatientSection();

    await home.clickAddPatient();

    await addPatient.addPatient({
        name: data.patient.name,
        email: uniqueEmail,
        phone: uniquePhone,
        gender: data.patient.gender,
        birthDate: data.patient.birthDate,
        bloodGroup: data.patient.bloodGroup,
        address: data.patient.address
    });

    await expect(page)
        .toHaveURL(/doctor\/patient/);

});

test('TC-05 : Search Patient', async ({ page }) => {

    const home = new HomePage(page);

    await home.openPatientSection();

    await home.searchBox.fill(uniquePhone);

    const patientRow = page
        .locator('table tbody tr')
        .filter({
            hasText: data.patient.name
        });

    await expect(patientRow)
        .toBeVisible({ timeout: 15000 });

});

test('TC-06 : Appointment Module', async ({ page }) => {

    const home = new HomePage(page);

    await home.openAppointmentList();

    await expect(page)
        .toHaveURL(/doctor\/appointment/);

});

test('TC-07 : Appointment Popup', async ({ page }) => {

    const home = new HomePage(page);
    const appointment = new AppointmentPage(page);

    await home.openAppointmentList();

    await appointment.openAppointmentPopup();

    await expect(
        page.getByRole('button', {
            name: /save|submit|create/i
        }).first()
    ).toBeVisible();

});

test('TC-08 : Create Appointment', async ({ page }) => {

    const home = new HomePage(page);
    const appointment = new AppointmentPage(page);

    await home.openAppointmentList();

    await appointment.openAppointmentPopup();

    await appointment.giveAppointment({
        patientName: data.patient.name,
        date: data.appointment.date
    });

    const appointmentRow = page
        .locator('table tbody tr')
        .filter({
            hasText: data.patient.name
        })
        .first();

    await expect(appointmentRow)
        .toBeVisible({ timeout: 15000 });

});


});
