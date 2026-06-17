# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: openMRS.spec.js >> OpenMRS E2E Suite >> TC-05 : Search Patient
- Location: tests\openMRS.spec.js:376:9

# Error details

```
TypeError: home.searchPatient is not a function
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - banner [ref=e4]:
      - link [ref=e6] [cursor=pointer]:
        - /url: http://202.83.16.221:9007/
        - img [ref=e7]
      - link "" [ref=e9] [cursor=pointer]:
        - /url: "#"
        - generic [ref=e10]: 
      - text: 
    - link "Welcome, Dr.Pradeep" [ref=e13] [cursor=pointer]:
      - /url: "#"
      - generic [ref=e14]: Welcome,
      - strong [ref=e15]: Dr.Pradeep
    - list [ref=e17]:
      - listitem [ref=e18]:
        - link " Dashboard" [ref=e19] [cursor=pointer]:
          - /url: http://202.83.16.221:9007/index.php?doctor
          - generic [ref=e20]: 
          - text: Dashboard
      - listitem [ref=e21]:
        - link "  Appointment" [ref=e22] [cursor=pointer]:
          - /url: "#"
          - text: 
          - generic [ref=e23]: 
          - text: Appointment
        - text:  
      - listitem [ref=e24]:
        - link " Prescription" [ref=e25] [cursor=pointer]:
          - /url: http://202.83.16.221:9007/index.php?doctor/prescription
          - generic [ref=e26]: 
          - text: Prescription
      - listitem [ref=e27]:
        - link " Patient" [ref=e28] [cursor=pointer]:
          - /url: http://202.83.16.221:9007/index.php?doctor/patient
          - generic [ref=e29]: 
          - text: Patient
      - listitem [ref=e30]:
        - link " Bed Allotment" [ref=e31] [cursor=pointer]:
          - /url: http://202.83.16.221:9007/index.php?doctor/bed_allotment
          - generic [ref=e32]: 
          - text: Bed Allotment
      - listitem [ref=e33]:
        - link " Blood Bank" [ref=e34] [cursor=pointer]:
          - /url: http://202.83.16.221:9007/index.php?doctor/blood_bank
          - generic [ref=e35]: 
          - text: Blood Bank
      - listitem [ref=e36]:
        - link " Report" [ref=e37] [cursor=pointer]:
          - /url: http://202.83.16.221:9007/index.php?doctor/report
          - generic [ref=e38]: 
          - text: Report
      - listitem [ref=e39]:
        - link " Message" [ref=e40] [cursor=pointer]:
          - /url: http://202.83.16.221:9007/index.php?doctor/message
          - generic [ref=e41]: 
          - text: Message
      - listitem [ref=e42]:
        - link " Profile" [ref=e43] [cursor=pointer]:
          - /url: http://202.83.16.221:9007/index.php?doctor/profile
          - generic [ref=e44]: 
          - text: Profile
  - generic [ref=e45]:
    - generic [ref=e46]:
      - heading "e-health management" [level=2] [ref=e48]
      - generic [ref=e49]:
        - list [ref=e50]:
          - listitem [ref=e51]:
            - link " doctor" [ref=e52] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e53]: 
              - text: doctor
          - listitem [ref=e54]:
            - link "" [ref=e55] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e56]: 
        - list [ref=e57]:
          - listitem [ref=e58]:
            - link "Log Out " [ref=e59] [cursor=pointer]:
              - /url: http://202.83.16.221:9007/index.php?login/logout
              - text: Log Out
              - generic [ref=e60]: 
    - separator [ref=e61]
    - heading " Patient" [level=3] [ref=e62]:
      - generic [ref=e63]: 
      - text: Patient
    - button "Add Patient" [ref=e64] [cursor=pointer]
    - grid [ref=e65]:
      - generic [ref=e66]:
        - generic [ref=e69]:
          - generic [ref=e70]:
            - link "10 " [ref=e71] [cursor=pointer]:
              - /url: javascript:void(0)
              - generic [ref=e72]: "10"
              - generic [ref=e74]: 
            - textbox "10  10 per page" [ref=e75]
            - text: 
          - combobox [ref=e76]:
            - option "10" [selected]
            - option "25"
            - option "50"
            - option "100"
          - text: per page
        - generic [ref=e77]:
          - generic [ref=e79]:
            - generic [ref=e80] [cursor=pointer]: Copy
            - generic [ref=e81] [cursor=pointer]: CSV
            - generic [ref=e82] [cursor=pointer]: Excel
            - generic [ref=e83] [cursor=pointer]: PDF
            - generic "View print view" [ref=e84] [cursor=pointer]: Print
          - generic [ref=e86]:
            - text: "Search:"
            - textbox "Search:" [ref=e87]
      - table [ref=e88]:
        - rowgroup [ref=e89]:
          - 'row "Image: activate to sort column descending Name: activate to sort column ascending Email: activate to sort column ascending Address: activate to sort column ascending Phone: activate to sort column ascending Sex: activate to sort column ascending Birth Date: activate to sort column ascending Age: activate to sort column ascending Blood Group: activate to sort column ascending Options: activate to sort column ascending" [ref=e90]':
            - 'columnheader "Image: activate to sort column descending" [ref=e91]':  Image
            - 'columnheader "Name: activate to sort column ascending" [ref=e92]': Name
            - 'columnheader "Email: activate to sort column ascending" [ref=e93]': Email
            - 'columnheader "Address: activate to sort column ascending" [ref=e94]': Address
            - 'columnheader "Phone: activate to sort column ascending" [ref=e95]': Phone
            - 'columnheader "Sex: activate to sort column ascending" [ref=e96]': Sex
            - 'columnheader "Birth Date: activate to sort column ascending" [ref=e97]': Birth Date
            - 'columnheader "Age: activate to sort column ascending" [ref=e98]': Age
            - 'columnheader "Blood Group: activate to sort column ascending" [ref=e99]': Blood Group
            - 'columnheader "Options: activate to sort column ascending" [ref=e100]': Options
        - alert [ref=e101]:
          - row "kamalika kamalika@gmail.com 01/01/1970 0 Action" [ref=e102]:
            - cell [ref=e103]:
              - img [ref=e104]
            - cell "kamalika" [ref=e105]
            - cell "kamalika@gmail.com" [ref=e106]
            - cell [ref=e107]
            - cell [ref=e108]
            - cell [ref=e109]
            - cell "01/01/1970" [ref=e110]
            - cell "0" [ref=e111]
            - cell [ref=e112]
            - cell "Action" [ref=e113]:
              - generic [ref=e114]:
                - button "Action" [ref=e115] [cursor=pointer]: Action
                - text:    
          - row "ABC abc@gmail.com ABCDE 9876543210 male 28/01/2020 6 B+ Action" [ref=e117]:
            - cell [ref=e118]:
              - img [ref=e119]
            - cell "ABC" [ref=e120]
            - cell "abc@gmail.com" [ref=e121]
            - cell "ABCDE" [ref=e122]
            - cell "9876543210" [ref=e123]
            - cell "male" [ref=e124]
            - cell "28/01/2020" [ref=e125]
            - cell "6" [ref=e126]
            - cell "B+" [ref=e127]
            - cell "Action" [ref=e128]:
              - generic [ref=e129]:
                - button "Action" [ref=e130] [cursor=pointer]: Action
                - text:    
          - row "Netaji neta@gmail.com Kolkata 8976543213 male 07/12/2024 1 B+ Action" [ref=e132]:
            - cell [ref=e133]:
              - img [ref=e134]
            - cell "Netaji" [ref=e135]
            - cell "neta@gmail.com" [ref=e136]
            - cell "Kolkata" [ref=e137]
            - cell "8976543213" [ref=e138]
            - cell "male" [ref=e139]
            - cell "07/12/2024" [ref=e140]
            - cell "1" [ref=e141]
            - cell "B+" [ref=e142]
            - cell "Action" [ref=e143]:
              - generic [ref=e144]:
                - button "Action" [ref=e145] [cursor=pointer]: Action
                - text:    
          - row "Nobita doramon@gmail.com japan don't know male 19/12/2025 14 AB+ Action" [ref=e147]:
            - cell [ref=e148]:
              - img [ref=e149]
            - cell "Nobita" [ref=e150]
            - cell "doramon@gmail.com" [ref=e151]
            - cell "japan" [ref=e152]
            - cell "don't know" [ref=e153]
            - cell "male" [ref=e154]
            - cell "19/12/2025" [ref=e155]
            - cell "14" [ref=e156]
            - cell "AB+" [ref=e157]
            - cell "Action" [ref=e158]:
              - generic [ref=e159]:
                - button "Action" [ref=e160] [cursor=pointer]: Action
                - text:    
          - row "gowtham gowtham@gmail.com c/o qspiders 9874563210 male 14/02/2000 26 B+ Action" [ref=e162]:
            - cell [ref=e163]:
              - img [ref=e164]
            - cell "gowtham" [ref=e165]
            - cell "gowtham@gmail.com" [ref=e166]
            - cell "c/o qspiders" [ref=e167]
            - cell "9874563210" [ref=e168]
            - cell "male" [ref=e169]
            - cell "14/02/2000" [ref=e170]
            - cell "26" [ref=e171]
            - cell "B+" [ref=e172]
            - cell "Action" [ref=e173]:
              - generic [ref=e174]:
                - button "Action" [ref=e175] [cursor=pointer]: Action
                - text:    
          - row "Sneha sneha@gmail.com Rajaji nagar 875463624 female 27/03/1996 30 B- Action" [ref=e177]:
            - cell [ref=e178]:
              - img [ref=e179]
            - cell "Sneha" [ref=e180]
            - cell "sneha@gmail.com" [ref=e181]
            - cell "Rajaji nagar" [ref=e182]
            - cell "875463624" [ref=e183]
            - cell "female" [ref=e184]
            - cell "27/03/1996" [ref=e185]
            - cell "30" [ref=e186]
            - cell "B-" [ref=e187]
            - cell "Action" [ref=e188]:
              - generic [ref=e189]:
                - button "Action" [ref=e190] [cursor=pointer]: Action
                - text:    
          - row "Avinash avinashrajus@gmail.com 52 2ND MAIN ROAD INCOME TAX LAYOUT VIJAYANAGAR Near Bangalore Central School 9663415271 male 14/02/1990 36 O+ Action" [ref=e192]:
            - cell [ref=e193]:
              - img [ref=e194]
            - cell "Avinash" [ref=e195]
            - cell "avinashrajus@gmail.com" [ref=e196]
            - cell "52 2ND MAIN ROAD INCOME TAX LAYOUT VIJAYANAGAR Near Bangalore Central School" [ref=e197]
            - cell "9663415271" [ref=e198]
            - cell "male" [ref=e199]
            - cell "14/02/1990" [ref=e200]
            - cell "36" [ref=e201]
            - cell "O+" [ref=e202]
            - cell "Action" [ref=e203]:
              - generic [ref=e204]:
                - button "Action" [ref=e205] [cursor=pointer]: Action
                - text:    
          - row "MS Dhoni msdcsk@gmail.com Ranchi 8796543210 male 08/03/1989 37 O- Action" [ref=e207]:
            - cell [ref=e208]:
              - img [ref=e209]
            - cell "MS Dhoni" [ref=e210]
            - cell "msdcsk@gmail.com" [ref=e211]
            - cell "Ranchi" [ref=e212]
            - cell "8796543210" [ref=e213]
            - cell "male" [ref=e214]
            - cell "08/03/1989" [ref=e215]
            - cell "37" [ref=e216]
            - cell "O-" [ref=e217]
            - cell "Action" [ref=e218]:
              - generic [ref=e219]:
                - button "Action" [ref=e220] [cursor=pointer]: Action
                - text:    
          - row "Salman Khan salmankhan@gmail.com No. 1234, West of Chord Road, Rajajinagar, Bangalore-51 9876543210 male 24/05/2000 25 O+ Action" [ref=e222]:
            - cell [ref=e223]:
              - img [ref=e224]
            - cell "Salman Khan" [ref=e225]
            - cell "salmankhan@gmail.com" [ref=e226]
            - cell "No. 1234, West of Chord Road, Rajajinagar, Bangalore-51" [ref=e227]
            - cell "9876543210" [ref=e228]
            - cell "male" [ref=e229]
            - cell "24/05/2000" [ref=e230]
            - cell "25" [ref=e231]
            - cell "O+" [ref=e232]
            - cell "Action" [ref=e233]:
              - generic [ref=e234]:
                - button "Action" [ref=e235] [cursor=pointer]: Action
                - text:    
          - row "john patient johnpatient@gmail.com hassan 9090909090 male 05/06/2010 16 B+ Action" [ref=e237]:
            - cell [ref=e238]:
              - img [ref=e239]
            - cell "john patient" [ref=e240]
            - cell "johnpatient@gmail.com" [ref=e241]
            - cell "hassan" [ref=e242]
            - cell "9090909090" [ref=e243]
            - cell "male" [ref=e244]
            - cell "05/06/2010" [ref=e245]
            - cell "16" [ref=e246]
            - cell "B+" [ref=e247]
            - cell "Action" [ref=e248]:
              - generic [ref=e249]:
                - button "Action" [ref=e250] [cursor=pointer]: Action
                - text:    
      - generic [ref=e252]:
        - generic [ref=e254]: Showing 1 to 10 of 37 entries
        - list [ref=e257]:
          - listitem:
            - link "" [ref=e258]:
              - /url: "#"
              - generic [ref=e259]: 
          - listitem:
            - link "1" [ref=e260]:
              - /url: "#"
          - listitem:
            - link "2" [ref=e261] [cursor=pointer]:
              - /url: "#"
          - listitem:
            - link "3" [ref=e262] [cursor=pointer]:
              - /url: "#"
          - listitem:
            - link "4" [ref=e263] [cursor=pointer]:
              - /url: "#"
          - listitem:
            - link "" [ref=e264] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e265]: 
    - contentinfo [ref=e266]:
      - text: © 2014
      - link "Creativeitem" [ref=e267] [cursor=pointer]:
        - /url: http://creativeitem.com
```

# Test source

```ts
  279 | //     // 8. Create Appointment
  280 | //     // ------------------------------------------------------------------------
  281 | //     await appointment.openAppointmentPopup();
  282 |     
  283 | //     await expect(page.getByRole('button', { name: /Save|Submit|Create/i }).first()).toBeVisible();
  284 | 
  285 | //     await appointment.giveAppointment({
  286 | //         patientName: data.patient.name,
  287 | //         date: data.appointment.date
  288 | //     });
  289 | 
  290 | //     // ------------------------------------------------------------------------
  291 | //     // 9. Verify Appointment Creation (Scoped Case-Insensitive Assertions)
  292 | //     // ------------------------------------------------------------------------
  293 | //     const appointmentRow = page.locator('table tbody tr').filter({
  294 | //         hasText: new RegExp(data.patient.name, 'i')
  295 | //     }).first();
  296 | 
  297 | //     await expect(appointmentRow).toBeVisible();
  298 | //     await expect(appointmentRow).toContainText(new RegExp(data.patient.name, 'i'));
  299 | //     await expect(appointmentRow).toContainText(/Pradeep/i); 
  300 |     
  301 | //     await expect(appointmentRow.getByRole('link', { name: /Delete/i })).toBeEnabled();
  302 | 
  303 | //     // >>> OUTPUT RETRIEVAL: Capture final metrics from the scheduled appointment entry
  304 | //     const finalAppointmentText = await appointmentRow.innerText();
  305 | //     console.log('==========================================');
  306 | //     console.log('        CREATED APPOINTMENT RECORD        ');
  307 | //     console.log('==========================================');
  308 | //     console.log(finalAppointmentText.trim());
  309 | //     console.log('==========================================\n');
  310 | // });
  311 | import { test, expect } from '@playwright/test';
  312 | 
  313 | import LoginPage       from '../PageObjectModel/doclogin.page.js';
  314 | import HomePage        from '../PageObjectModel/openMRShome.page.js';
  315 | import AddPatientPage  from '../PageObjectModel/addpatient.page.js';
  316 | import AppointmentPage from '../PageObjectModel/addappointment.page.js';
  317 | 
  318 | import data from '../testData/openMRS.json' with { type: 'json' };
  319 | 
  320 | test.describe.configure({ mode: 'serial' });
  321 | 
  322 | const uniqueId     = Date.now();
  323 | const randomDigits = Math.floor(10000 + Math.random() * 90000);
  324 | const uniquePhone  = `98765${randomDigits}`;
  325 | const uniqueEmail  = `patient_${uniqueId}@gmail.com`;
  326 | 
  327 | test.describe('OpenMRS E2E Suite', () => {
  328 | 
  329 |     test.beforeEach(async ({ page }) => {
  330 |         test.setTimeout(120000);
  331 |         const login = new LoginPage(page);
  332 |         await login.goto(data.login.url);
  333 |         await login.login(data.login.email, data.login.password);
  334 |         await expect(
  335 |             page.getByRole('link', { name: /log out/i })
  336 |         ).toBeVisible({ timeout: 30000 });
  337 |     });
  338 | 
  339 |     test('TC-01 : Login to OpenMRS', async ({ page }) => {
  340 |         await expect(
  341 |             page.getByRole('link', { name: /log out/i })
  342 |         ).toBeVisible({ timeout: 20000 });
  343 |     });
  344 | 
  345 |     test('TC-02 : Navigate to Patient Module', async ({ page }) => {
  346 |         const home = new HomePage(page);
  347 |         await home.openPatientSection();
  348 |         await expect(page).toHaveURL(/patient/, { timeout: 30000 });
  349 |     });
  350 | 
  351 |     test('TC-03 : Verify Add Patient Modal', async ({ page }) => {
  352 |         const home       = new HomePage(page);
  353 |         const addPatient = new AddPatientPage(page);
  354 |         await home.openPatientSection();
  355 |         await home.clickAddPatient();
  356 |         await expect(addPatient.modal).toBeVisible({ timeout: 20000 });
  357 |     });
  358 | 
  359 |     test('TC-04 : Add New Patient', async ({ page }) => {
  360 |         const home       = new HomePage(page);
  361 |         const addPatient = new AddPatientPage(page);
  362 |         await home.openPatientSection();
  363 |         await home.clickAddPatient();
  364 |         await addPatient.addPatient({
  365 |             name:       data.patient.name,
  366 |             email:      uniqueEmail,
  367 |             phone:      uniquePhone,
  368 |             gender:     data.patient.gender,
  369 |             birthDate:  data.patient.birthDate,
  370 |             bloodGroup: data.patient.bloodGroup,
  371 |             address:    data.patient.address,
  372 |         });
  373 |         await expect(page).toHaveURL(/patient/, { timeout: 30000 });
  374 |     });
  375 | 
  376 |     test('TC-05 : Search Patient', async ({ page }) => {
  377 |         const home = new HomePage(page);
  378 |         await home.openPatientSection();
> 379 |         await home.searchPatient(uniquePhone);
      |                    ^ TypeError: home.searchPatient is not a function
  380 |         const patientRow = page
  381 |             .locator('table tbody tr')
  382 |             .filter({ hasText: data.patient.name });
  383 |         await expect(patientRow.first()).toBeVisible({ timeout: 20000 });
  384 |     });
  385 | 
  386 |     test('TC-06 : Appointment Module', async ({ page }) => {
  387 |         const home = new HomePage(page);
  388 |         await home.openAppointmentList();
  389 |         await expect(page).toHaveURL(/appointment/, { timeout: 30000 });
  390 |     });
  391 | 
  392 |     test('TC-07 : Appointment Popup', async ({ page }) => {
  393 |         const home        = new HomePage(page);
  394 |         const appointment = new AppointmentPage(page);
  395 |         await home.openAppointmentList();
  396 |         await appointment.openAppointmentPopup();
  397 |         await expect(
  398 |             page.getByRole('button', { name: /save|submit|create/i }).first()
  399 |         ).toBeVisible({ timeout: 15000 });
  400 |     });
  401 | 
  402 |     test('TC-08 : Create Appointment', async ({ page }) => {
  403 |         const home        = new HomePage(page);
  404 |         const appointment = new AppointmentPage(page);
  405 |         await home.openAppointmentList();
  406 |         await appointment.openAppointmentPopup();
  407 |         await appointment.giveAppointment({
  408 |             patientName: data.patient.name,
  409 |             date:        data.appointment.date,
  410 |         });
  411 |         const appointmentRow = page
  412 |             .locator('table tbody tr')
  413 |             .filter({ hasText: data.patient.name })
  414 |             .first();
  415 |         await expect(appointmentRow).toBeVisible({ timeout: 20000 });
  416 |     });
  417 | 
  418 | });
```