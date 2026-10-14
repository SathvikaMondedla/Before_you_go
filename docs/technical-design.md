# FormBridge — Technical Design

## 1. Project Overview

FormBridge is a multilingual digital guide designed to help people understand real-world service procedures before visiting a college, bank, or government service centre.

It aims to explain required documents, forms, signatures, payments, and submission steps in a clear and accessible format.

The current prototype begins with a college-service use case and is intended to expand to additional services over time.

## 2. Problem Statement

People may struggle to complete service procedures because information is scattered across notices, forms, websites, and offices. They may be unsure which documents to carry, which form to use, where to sign, or where to submit their application.

FormBridge aims to reduce this confusion through structured, step-by-step guidance.

## 3. Current Technology Stack

- **Frontend:** React
- **Development and build tool:** Vite
- **Styling:** CSS
- **Programming language:** JavaScript
- **Version control and hosting:** Git and GitHub

## 4. Current System Architecture

The current prototype is a frontend web application.

User  
↓  
React user interface  
↓  
Search and service-guide interface  
↓  
Service information displayed to the user

The interface is designed to let users discover services and read relevant guidance.

**Current scope:** A frontend prototype. A backend, database, live institutional integrations, voice-based processing, and automated information verification are not yet implemented unless added separately.

## 5. Main Components

### User Interface
Displays the homepage, service categories, search field, and service-guide content.

### Search Interface
Allows users to search for available service information in the prototype.

### Service Guide
Displays preparation checklists and procedural guidance for a selected service.

### Styling
CSS controls the layout, typography, spacing, and responsive presentation.

## 6. Information Reliability

Service instructions must be checked against current official sources before being presented as verified.

Information based on personal experience or awaiting confirmation must be labelled clearly as preliminary. Users should be encouraged to confirm changing requirements with the relevant institution.

## 7. Privacy and Security Considerations

- Do not publish real Aadhaar numbers, bank details, phone numbers, signatures, or personal application records.
- Use fictional or blank examples when demonstrating forms.
- Avoid collecting personal information unless it is necessary for a clearly defined feature.
- Do not claim that information has been officially verified unless verification has actually taken place.

## 8. Testing Plan

The prototype should be tested for:

1. Successful homepage loading.
2. Searching for an available service.
3. Displaying the correct guide.
4. Handling searches with no matching results.
5. Readability on desktop and mobile-sized screens.
6. Clear labelling of preliminary information.

## 9. Known Limitations

- The prototype currently focuses on a limited set of service information.
- Official procedures may change and require periodic verification.
- Voice-to-Action and automated Information Checker functionality may require future development.
- A backend and persistent database are not part of the current architecture unless implemented separately.

## 10. Future Improvements

- Add field-by-field form instructions and annotated blank form examples.
- Expand the service catalogue.
- Add English, Telugu, and Hindi guidance.
- Develop voice-based service discovery.
- Introduce a reliable process for checking and updating official information.
- Conduct user testing and improve accessibility.

## 11. Development Setup

Install Node.js and npm, then open a terminal in the project root and run:

```bash
npm install
npm run dev
```

Follow the local URL printed by Vite to open the application in a browser.

## 12. Project Status

This repository contains an early working prototype. Features described as future improvements are planned and should not be interpreted as already implemented.