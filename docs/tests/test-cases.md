# FormBridge — Test Cases

## Purpose

These test cases describe how to manually check the current FormBridge prototype.

## Test Environment

- Application: FormBridge — Before You Go
- Frontend: React
- Development server: Vite
- Test type: Manual functional testing

## Test Cases

| ID | Test | Steps | Expected Result |
|---|---|---|---|
| TC-01 | Homepage loads | Start the application and open its local URL. | The homepage appears without a blank screen. |
| TC-02 | Search a service | Enter `bonafide` in the search field. | Matching service content appears if supported by the current search implementation. |
| TC-03 | Search with no match | Enter a random service name that is not available. | The interface handles the search clearly without crashing. |
| TC-04 | Open a service guide | Select the Bonafide Certificate guide. | The relevant guide opens and displays its content. |
| TC-05 | Review preliminary information | Open the Bonafide Certificate guide. | Unverified instructions are clearly labelled as preliminary. |
| TC-06 | Check layout | Resize the browser window to a narrower width. | Content remains readable and usable. |
| TC-07 | Check language selector | Change the selected language, if the selector is interactive. | The interface responds as implemented; unsupported translations are not presented as complete. |

## Test Results

Record the actual result after running each test.

| Test ID | Actual Result | Status | Notes |
|---|---|---|---|
| TC-01 | Pending | Not tested | |
| TC-02 | Pending | Not tested | |
| TC-03 | Pending | Not tested | |
| TC-04 | Pending | Not tested | |
| TC-05 | Pending | Not tested | |
| TC-06 | Pending | Not tested | |
| TC-07 | Pending | Not tested | |

## Notes

These are planned manual tests. Do not mark a test as passed until it has actually been performed. Update this document as the prototype evolves.