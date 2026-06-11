# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: openMRS.spec.js >> OpenMRS E2E Suite >> TC-05 : Search Patient
- Location: tests\openMRS.spec.js:403:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input[type="search"], input[placeholder*="Search"]').first()

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
            - generic [ref=e82] [cursor=pointer]: CSV
            - generic [ref=e84] [cursor=pointer]: Excel
            - generic [ref=e86] [cursor=pointer]: PDF
            - generic "View print view" [ref=e88] [cursor=pointer]: Print
          - generic [ref=e90]:
            - text: "Search:"
            - textbox "Search:" [ref=e91]
      - table [ref=e92]:
        - rowgroup [ref=e93]:
          - 'row "Image: activate to sort column descending Name: activate to sort column ascending Email: activate to sort column ascending Address: activate to sort column ascending Phone: activate to sort column ascending Sex: activate to sort column ascending Birth Date: activate to sort column ascending Age: activate to sort column ascending Blood Group: activate to sort column ascending Options: activate to sort column ascending" [ref=e94]':
            - 'columnheader "Image: activate to sort column descending" [ref=e95]':  Image
            - 'columnheader "Name: activate to sort column ascending" [ref=e96]': Name
            - 'columnheader "Email: activate to sort column ascending" [ref=e97]': Email
            - 'columnheader "Address: activate to sort column ascending" [ref=e98]': Address
            - 'columnheader "Phone: activate to sort column ascending" [ref=e99]': Phone
            - 'columnheader "Sex: activate to sort column ascending" [ref=e100]': Sex
            - 'columnheader "Birth Date: activate to sort column ascending" [ref=e101]': Birth Date
            - 'columnheader "Age: activate to sort column ascending" [ref=e102]': Age
            - 'columnheader "Blood Group: activate to sort column ascending" [ref=e103]': Blood Group
            - 'columnheader "Options: activate to sort column ascending" [ref=e104]': Options
        - alert [ref=e105]:
          - row "kamalika kamalika@gmail.com 01/01/1970 0 Action" [ref=e106]:
            - cell [ref=e107]:
              - img [ref=e108]
            - cell "kamalika" [ref=e109]
            - cell "kamalika@gmail.com" [ref=e110]
            - cell [ref=e111]
            - cell [ref=e112]
            - cell [ref=e113]
            - cell "01/01/1970" [ref=e114]
            - cell "0" [ref=e115]
            - cell [ref=e116]
            - cell "Action" [ref=e117]:
              - generic [ref=e118]:
                - button "Action" [ref=e119] [cursor=pointer]: Action
                - text:    
          - row "ABC abc@gmail.com ABCDE 9876543210 male 28/01/2020 6 B+ Action" [ref=e121]:
            - cell [ref=e122]:
              - img [ref=e123]
            - cell "ABC" [ref=e124]
            - cell "abc@gmail.com" [ref=e125]
            - cell "ABCDE" [ref=e126]
            - cell "9876543210" [ref=e127]
            - cell "male" [ref=e128]
            - cell "28/01/2020" [ref=e129]
            - cell "6" [ref=e130]
            - cell "B+" [ref=e131]
            - cell "Action" [ref=e132]:
              - generic [ref=e133]:
                - button "Action" [ref=e134] [cursor=pointer]: Action
                - text:    
          - row "Netaji neta@gmail.com Kolkata 8976543213 male 07/12/2024 1 B+ Action" [ref=e136]:
            - cell [ref=e137]:
              - img [ref=e138]
            - cell "Netaji" [ref=e139]
            - cell "neta@gmail.com" [ref=e140]
            - cell "Kolkata" [ref=e141]
            - cell "8976543213" [ref=e142]
            - cell "male" [ref=e143]
            - cell "07/12/2024" [ref=e144]
            - cell "1" [ref=e145]
            - cell "B+" [ref=e146]
            - cell "Action" [ref=e147]:
              - generic [ref=e148]:
                - button "Action" [ref=e149] [cursor=pointer]: Action
                - text:    
          - row "Nobita doramon@gmail.com japan don't know male 19/12/2025 14 AB+ Action" [ref=e151]:
            - cell [ref=e152]:
              - img [ref=e153]
            - cell "Nobita" [ref=e154]
            - cell "doramon@gmail.com" [ref=e155]
            - cell "japan" [ref=e156]
            - cell "don't know" [ref=e157]
            - cell "male" [ref=e158]
            - cell "19/12/2025" [ref=e159]
            - cell "14" [ref=e160]
            - cell "AB+" [ref=e161]
            - cell "Action" [ref=e162]:
              - generic [ref=e163]:
                - button "Action" [ref=e164] [cursor=pointer]: Action
                - text:    
          - row "gowtham gowtham@gmail.com c/o qspiders 9874563210 male 14/02/2000 26 B+ Action" [ref=e166]:
            - cell [ref=e167]:
              - img [ref=e168]
            - cell "gowtham" [ref=e169]
            - cell "gowtham@gmail.com" [ref=e170]
            - cell "c/o qspiders" [ref=e171]
            - cell "9874563210" [ref=e172]
            - cell "male" [ref=e173]
            - cell "14/02/2000" [ref=e174]
            - cell "26" [ref=e175]
            - cell "B+" [ref=e176]
            - cell "Action" [ref=e177]:
              - generic [ref=e178]:
                - button "Action" [ref=e179] [cursor=pointer]: Action
                - text:    
          - row "Sneha sneha@gmail.com Rajaji nagar 875463624 female 27/03/1996 30 B- Action" [ref=e181]:
            - cell [ref=e182]:
              - img [ref=e183]
            - cell "Sneha" [ref=e184]
            - cell "sneha@gmail.com" [ref=e185]
            - cell "Rajaji nagar" [ref=e186]
            - cell "875463624" [ref=e187]
            - cell "female" [ref=e188]
            - cell "27/03/1996" [ref=e189]
            - cell "30" [ref=e190]
            - cell "B-" [ref=e191]
            - cell "Action" [ref=e192]:
              - generic [ref=e193]:
                - button "Action" [ref=e194] [cursor=pointer]: Action
                - text:    
          - row "Avinash avinashrajus@gmail.com 52 2ND MAIN ROAD INCOME TAX LAYOUT VIJAYANAGAR Near Bangalore Central School 9663415271 male 14/02/1990 36 O+ Action" [ref=e196]:
            - cell [ref=e197]:
              - img [ref=e198]
            - cell "Avinash" [ref=e199]
            - cell "avinashrajus@gmail.com" [ref=e200]
            - cell "52 2ND MAIN ROAD INCOME TAX LAYOUT VIJAYANAGAR Near Bangalore Central School" [ref=e201]
            - cell "9663415271" [ref=e202]
            - cell "male" [ref=e203]
            - cell "14/02/1990" [ref=e204]
            - cell "36" [ref=e205]
            - cell "O+" [ref=e206]
            - cell "Action" [ref=e207]:
              - generic [ref=e208]:
                - button "Action" [ref=e209] [cursor=pointer]: Action
                - text:    
          - row "MS Dhoni msdcsk@gmail.com Ranchi 8796543210 male 08/03/1989 37 O- Action" [ref=e211]:
            - cell [ref=e212]:
              - img [ref=e213]
            - cell "MS Dhoni" [ref=e214]
            - cell "msdcsk@gmail.com" [ref=e215]
            - cell "Ranchi" [ref=e216]
            - cell "8796543210" [ref=e217]
            - cell "male" [ref=e218]
            - cell "08/03/1989" [ref=e219]
            - cell "37" [ref=e220]
            - cell "O-" [ref=e221]
            - cell "Action" [ref=e222]:
              - generic [ref=e223]:
                - button "Action" [ref=e224] [cursor=pointer]: Action
                - text:    
          - row "Salman Khan salmankhan@gmail.com No. 1234, West of Chord Road, Rajajinagar, Bangalore-51 9876543210 male 24/05/2000 25 O+ Action" [ref=e226]:
            - cell [ref=e227]:
              - img [ref=e228]
            - cell "Salman Khan" [ref=e229]
            - cell "salmankhan@gmail.com" [ref=e230]
            - cell "No. 1234, West of Chord Road, Rajajinagar, Bangalore-51" [ref=e231]
            - cell "9876543210" [ref=e232]
            - cell "male" [ref=e233]
            - cell "24/05/2000" [ref=e234]
            - cell "25" [ref=e235]
            - cell "O+" [ref=e236]
            - cell "Action" [ref=e237]:
              - generic [ref=e238]:
                - button "Action" [ref=e239] [cursor=pointer]: Action
                - text:    
          - row "john patient johnpatient@gmail.com hassan 9090909090 male 05/06/2010 16 B+ Action" [ref=e241]:
            - cell [ref=e242]:
              - img [ref=e243]
            - cell "john patient" [ref=e244]
            - cell "johnpatient@gmail.com" [ref=e245]
            - cell "hassan" [ref=e246]
            - cell "9090909090" [ref=e247]
            - cell "male" [ref=e248]
            - cell "05/06/2010" [ref=e249]
            - cell "16" [ref=e250]
            - cell "B+" [ref=e251]
            - cell "Action" [ref=e252]:
              - generic [ref=e253]:
                - button "Action" [ref=e254] [cursor=pointer]: Action
                - text:    
      - generic [ref=e256]:
        - generic [ref=e258]: Showing 1 to 10 of 37 entries
        - list [ref=e261]:
          - listitem:
            - link "" [ref=e262]:
              - /url: "#"
              - generic [ref=e263]: 
          - listitem:
            - link "1" [ref=e264]:
              - /url: "#"
          - listitem:
            - link "2" [ref=e265] [cursor=pointer]:
              - /url: "#"
          - listitem:
            - link "3" [ref=e266] [cursor=pointer]:
              - /url: "#"
          - listitem:
            - link "4" [ref=e267] [cursor=pointer]:
              - /url: "#"
          - listitem:
            - link "" [ref=e268] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e269]: 
    - contentinfo [ref=e270]:
      - text: © 2014
      - link "Creativeitem" [ref=e271] [cursor=pointer]:
        - /url: http://creativeitem.com
```

# Test source

```ts
  309 | //     console.log('==========================================\n');
  310 | // });
  311 | import { test, expect } from '@playwright/test';
  312 | 
  313 | import LoginPage from '../PageObjectModel/doclogin.page.js';
  314 | import HomePage from '../PageObjectModel/openMRShome.page.js';
  315 | import AddPatientPage from '../PageObjectModel/addpatient.page.js';
  316 | import AppointmentPage from '../PageObjectModel/addappointment.page.js';
  317 | 
  318 | import data from '../testData/openMRS.json' with { type: 'json' };
  319 | 
  320 | test.describe.configure({ mode: 'serial' });
  321 | 
  322 | const uniqueId = Date.now();
  323 | const randomDigits = Math.floor(10000 + Math.random() * 90000);
  324 | 
  325 | const uniquePhone = `98765${randomDigits}`;
  326 | const uniqueEmail = `patient_${uniqueId}@gmail.com`;
  327 | 
  328 | test.describe('OpenMRS E2E Suite', () => {
  329 | 
  330 | test.beforeEach(async ({ page }) => {
  331 | 
  332 |     const login = new LoginPage(page);
  333 | 
  334 |     await login.goto(data.login.url);
  335 | 
  336 |     await login.login(
  337 |         data.login.email,
  338 |         data.login.password
  339 |     );
  340 | 
  341 |     await expect(
  342 |         page.getByRole('link', { name: /log out/i })
  343 |     ).toBeVisible({ timeout: 15000 });
  344 | });
  345 | 
  346 | test('TC-01 : Login to OpenMRS', async ({ page }) => {
  347 | 
  348 |     await expect(
  349 |         page.getByRole('link', { name: /log out/i })
  350 |     ).toBeVisible();
  351 | 
  352 | });
  353 | 
  354 | test('TC-02 : Navigate to Patient Module', async ({ page }) => {
  355 | 
  356 |     const home = new HomePage(page);
  357 | 
  358 |     await home.openPatientSection();
  359 | 
  360 |     await expect(page)
  361 |         .toHaveURL(/doctor\/patient/);
  362 | 
  363 | });
  364 | 
  365 | test('TC-03 : Verify Add Patient Modal', async ({ page }) => {
  366 | 
  367 |     const home = new HomePage(page);
  368 |     const addPatient = new AddPatientPage(page);
  369 | 
  370 |     await home.openPatientSection();
  371 | 
  372 |     await home.clickAddPatient();
  373 | 
  374 |     await expect(addPatient.modal)
  375 |         .toBeVisible({ timeout: 10000 });
  376 | 
  377 | });
  378 | 
  379 | test('TC-04 : Add New Patient', async ({ page }) => {
  380 | 
  381 |     const home = new HomePage(page);
  382 |     const addPatient = new AddPatientPage(page);
  383 | 
  384 |     await home.openPatientSection();
  385 | 
  386 |     await home.clickAddPatient();
  387 | 
  388 |     await addPatient.addPatient({
  389 |         name: data.patient.name,
  390 |         email: uniqueEmail,
  391 |         phone: uniquePhone,
  392 |         gender: data.patient.gender,
  393 |         birthDate: data.patient.birthDate,
  394 |         bloodGroup: data.patient.bloodGroup,
  395 |         address: data.patient.address
  396 |     });
  397 | 
  398 |     await expect(page)
  399 |         .toHaveURL(/doctor\/patient/);
  400 | 
  401 | });
  402 | 
  403 | test('TC-05 : Search Patient', async ({ page }) => {
  404 | 
  405 |     const home = new HomePage(page);
  406 | 
  407 |     await home.openPatientSection();
  408 | 
> 409 |     await home.searchBox.fill(uniquePhone);
      |                          ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  410 | 
  411 |     const patientRow = page
  412 |         .locator('table tbody tr')
  413 |         .filter({
  414 |             hasText: data.patient.name
  415 |         });
  416 | 
  417 |     await expect(patientRow)
  418 |         .toBeVisible({ timeout: 15000 });
  419 | 
  420 | });
  421 | 
  422 | test('TC-06 : Appointment Module', async ({ page }) => {
  423 | 
  424 |     const home = new HomePage(page);
  425 | 
  426 |     await home.openAppointmentList();
  427 | 
  428 |     await expect(page)
  429 |         .toHaveURL(/doctor\/appointment/);
  430 | 
  431 | });
  432 | 
  433 | test('TC-07 : Appointment Popup', async ({ page }) => {
  434 | 
  435 |     const home = new HomePage(page);
  436 |     const appointment = new AppointmentPage(page);
  437 | 
  438 |     await home.openAppointmentList();
  439 | 
  440 |     await appointment.openAppointmentPopup();
  441 | 
  442 |     await expect(
  443 |         page.getByRole('button', {
  444 |             name: /save|submit|create/i
  445 |         }).first()
  446 |     ).toBeVisible();
  447 | 
  448 | });
  449 | 
  450 | test('TC-08 : Create Appointment', async ({ page }) => {
  451 | 
  452 |     const home = new HomePage(page);
  453 |     const appointment = new AppointmentPage(page);
  454 | 
  455 |     await home.openAppointmentList();
  456 | 
  457 |     await appointment.openAppointmentPopup();
  458 | 
  459 |     await appointment.giveAppointment({
  460 |         patientName: data.patient.name,
  461 |         date: data.appointment.date
  462 |     });
  463 | 
  464 |     const appointmentRow = page
  465 |         .locator('table tbody tr')
  466 |         .filter({
  467 |             hasText: data.patient.name
  468 |         })
  469 |         .first();
  470 | 
  471 |     await expect(appointmentRow)
  472 |         .toBeVisible({ timeout: 15000 });
  473 | 
  474 | });
  475 | 
  476 | 
  477 | });
  478 | 
```