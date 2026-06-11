import { test, expect } from '@playwright/test';

import LoginPage from '../PageObjectModel/doclogin.page.js';
import HomePage from '../PageObjectModel/openMRShome.page.js';
import AddPatientPage from '../PageObjectModel/addpatient.page.js';

import { readExcel } from '../PageObjectModel/util/xlreader.js';

import config from '../testdata/openMRS.json' with { type: 'json' };

test('OpenMRS End-to-End Flow', async ({ page }) => {
    // Page Objects
    const login = new LoginPage(page);
    const home = new HomePage(page);
    const addPatient = new AddPatientPage(page);

    // ------------------------------------------------------------------
    // Read Test Data
    // ------------------------------------------------------------------
    const patients = await readExcel(
        './testdata/patientData.xlsx',
        'Sheet1'
    );

    const patient = patients[0];

    // Generate unique phone number
    const uniquePhone = `98765${Date.now()}`;

    // ------------------------------------------------------------------
    // Login
    // ------------------------------------------------------------------
    await login.goto(config.login.url);

    await login.login(
        config.login.email,
        config.login.password
    );

    await login.verifyLogin();

    // ------------------------------------------------------------------
    // Open Patient Module
    // ------------------------------------------------------------------
    await home.openPatientSection();

    // Open Add Patient Modal
    await home.clickAddPatient();

    // Verify Modal Opened
    await expect(addPatient.modal).toBeVisible();

    // ------------------------------------------------------------------
    // Add Patient
    // ------------------------------------------------------------------
    await addPatient.addPatient({
        ...patient,
        phone: uniquePhone
    });

    // ------------------------------------------------------------------
    // Verify Success Message
    // ------------------------------------------------------------------
    await expect(home.toast).toBeVisible({
        timeout: 10000
    });

    // ------------------------------------------------------------------
    // Search Patient
    // ------------------------------------------------------------------
    await home.searchBox.fill(uniquePhone);

    const row = page
        .getByRole('row')
        .filter({
            hasText: uniquePhone
        });

    await expect(row).toBeVisible({
        timeout: 10000
    });

    await expect(row).toContainText(uniquePhone);

    // ------------------------------------------------------------------
    // Appointment Flow
    // ------------------------------------------------------------------
    await row
        .getByRole('button', {
            name: /action/i
        })
        .click();

    await home.appointmentBtn.click();
});