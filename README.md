# puppeteer_node.js-project
Skroutz GPU Web Scraping
This project utilizes Node.js and the Puppeteer library for web scraping GPU items from Skroutz's website.

Introduction
Web scraping is the process of extracting data from websites programmatically. Skroutz.gr is a popular e-commerce platform that provides information about various products, including GPUs (Graphics Processing Units). By using the Puppeteer library in Node.js, we can automate the process of navigating Skroutz's website, extracting GPU item details, and saving them to a CSV file.

Features
Scrapes GPU items from Skroutz.gr
Extracts details such as title and price
Saves the extracted data to a CSV file
Prerequisites
To run this project, make sure you have the following prerequisites installed:

Node.js: Download and Install Node.js
npm: Installed automatically with Node.js

Customize
Target URL: If you want to scrape a different category or modify the target URL, open index.js and update the page.goto() URL accordingly.

Data Extraction: To extract additional or different data from the GPU items, modify the page.evaluate() calls inside the loop in index.js. You can inspect the HTML structure of the page and adjust the selectors and evaluation functions accordingly.

License
This project is licensed under no licence
Feel free to customize and use the code according to your needs.

Acknowledgements
This project was inspired by the need to gather GPU item data from Skroutz.gr and automate the process using web scraping techniques.

Disclaimer
This project is for educational purposes only. Be sure to review and comply with the terms of service of any website you intend to scrape. Respect the website's policies and use web scraping responsibly.
