[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/_IojtdoU)
# StackIt Hiring Assignment

### Welcome to StackIt's hiring assignment! 🚀

**If you didn't get here through github classroom, are you sure you're supposed to be here? 🤨**


We are glad to have you here, but before you read what you're going to beat your head over for the next few hours (maybe days?), let's get a few things straight:
- We really appreciate honesty. Don't copy anyone else's assignment, it'll only sabotage your chances :P
- You're free to use any stack, and library of your choice. Use whatever you can get your hands on, on the internet!
- We love out of the box solutions. We prefer to call it *Jugaad* 
- This might be just the first round, but carries the most importance of all. Give your best, and we hope you have a fun time solving this problem.

## ✨ **Problem Statement: Crafting a CSV Importer for Google Sheets** ✨

**Context**:
Data analysts around the world 🌍, handle massive amounts of data to derive meaningful insights for their organization 📊. Among the tools they use, Google Sheets 📈 stands out due to its ease of use, accessibility, and collaborative features. However, many analysts have identified a recurring pain point: the cumbersome process of importing CSV files into Google Sheets repeatedly.

A typical week of an analyst in an e-commerce company 🛒 involves receiving multiple CSV files 📁 containing sales, inventory, customer feedback, and more. The data from these files needs to be meticulously analyzed and presented in the company’s weekly meetings. However, instead of diving directly into analysis, most analysts need to spend an inordinate amount of time just importing and structuring these CSV files into Google Sheets ⏳. This repetitive, time-consuming task reduces the efficiency of these professionals and delays the extraction of crucial insights 😫.

**Today, you are going to make their lives better.**

**Problem Statement**:
Make a CSV Importer for Google Sheets that lets users drag and drop CSV files onto the Google Sheet. The moment they drop the CSV file, allow them to select which columns to import 🗂️.

You get brownie points 🍪 if you can make it even easier by allowing them to filter the data as well before importing it into Google Sheets 🔍.

**Other pointers**:
- Import to Sheet – After validation and mapping, devise a method to populate the data into a chosen Google Sheet, either appending to existing data or creating a new sheet 📥📋.
- Optimize for Large Files – Large datasets are common in analytics. Your solution should effectively handle large CSV files (~15MB CSV file) without causing performance issues or prolonged waiting times 📈📦.

## Submission ⏰
The timeline for this submission is: **9AM, 30th Sept, 2023 - 12PM, 2nd Oct, 2023**

Some things you might want to take care of:
- Make use of git and commit your steps!
- Use good coding practices.
- Write beautiful and readable code. Well-written code is nothing less than a work of art.
- Use semantic variable naming.
- Your code should be organized well in files and folders which is easy to figure out.
- If there is something happening in your code that is not very intuitive, add some comments.
- Add to this README at the bottom explaining your approach (brownie points 😋)

Make sure you finish the assignment a little earlier than this so you have time to make any final changes.

Once you're done, make sure you **record a video** showing your project working. The video should **NOT** be longer than 120 seconds. While you record the video, tell us about your biggest blocker, and how you overcame it! Don't be shy, talk us through, we'd love that.

We have a checklist at the bottom of this README file, which you should update as your progress with your assignment. It will help us evaluate your project.

- [*] My code's working just fine! 🥳
- [*] I have recorded a video showing it working and embedded it in the README ▶️
- [*] I have tested all the normal working cases 😎
- [ ] I have even solved some edge cases (brownie points) 💪
- [*] I added my very planned-out approach to the problem at the end of this README 📜

## Got Questions❓
Feel free to check the discussions tab, you might get something of help there. Check out that tab before reaching out to us. Also, did you know, the internet is a great place to explore 😛

## Developer's Section
*Add your video here, and your approach to the problem (optional). Leave some comments for us here if you want, we will be reading this :)*

The video has been uploaded in the GitHub repository but if that does not work, here is the public google drive link of the demonstration video:-

Video Link: https://drive.google.com/file/d/1qYSCJjejBejAvK9nUSrlG_GXA7It9une/view?usp=sharing

## Explanation of the code

## Code.gs

function doGet() { return HtmlService.createHtmlOutputFromFile('Index'); }
This is a special function in Google Apps Script that is triggered when a user accesses a web app or a web page created using Apps Script.
doGet is a function that responds to HTTP GET requests.
HtmlService.createHtmlOutputFromFile('Index') creates an HTML output based on the content of a file named 'Index'. It essentially serves the 'Index' file when someone accesses the web app. Think of it as the main page of a website.

function importCSV(data) { ... }
This is another function defined in the script.
importCSV is a custom function that can be called from elsewhere, usually triggered by some action.
It takes one argument, data, which is expected to contain CSV (Comma-Separated Values) data in text format.

Inside the importCSV function:

var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
This line gets the currently active Google Sheets spreadsheet and selects the active sheet within that spreadsheet.

var csvData = Utilities.parseCsv(data);
Here, the Utilities.parseCsv(data) function is used to convert the data (CSV text) into a structured format that can be used in Google Sheets. It essentially breaks down the CSV data into rows and columns.

sheet.getRange(sheet.getLastRow() + 1, 1, csvData.length, csvData[0].length).setValues(csvData);
This line is responsible for inserting the parsed CSV data into the active sheet.
sheet.getLastRow() finds the last row with data in the sheet.
+ 1 is used to select the next empty row for insertion.
1 in the second argument specifies the starting column (column 1).
csvData.length is the number of rows in the CSV data.
csvData[0].length is the number of columns in the CSV data.
setValues(csvData) sets the values of the selected range (empty rows) with the CSV data, effectively adding it to the sheet.

In simpler terms, this code defines two functions:

One function serves an HTML web page when you access a web app.
The other function is used to take CSV data and add it to a Google Sheets spreadsheet.

## Index.html

HTML Structure
The page is an HTML document enclosed in html, head, and body tags.
It sets a base target to "_top," which is a common practice for web apps.

Page Content
There is an h1 element displaying the text "Drag and Drop CSV Importer," which is a title for the web page.
Below that, there's a div with the ID "drop-zone." This is where users can drag and drop CSV files for importing.
Inside the "drop-zone," there's a message encouraging users to drag and drop or click to browse for a CSV file. An <input> element with type="file" is hidden but used to browse for files.

Filtering Data
There's an h2 element with the text "Filter Data," indicating a filtering functionality.
A label and an input element with the ID "filterKeyword" allow users to input a keyword for filtering.
A <button> with the text "Filter" triggers the filtering operation when clicked.

Styling
Some inline CSS styles and a style block define styles for the "drop-zone" and the "drag-over" effect when a file is being dragged over the drop zone.

JavaScript Code
JavaScript code within <script> tags handles the interactive functionality of the web page.
It defines event listeners for drag-and-drop interactions, file selection, and filtering.
When a CSV file is dropped or selected, the code reads the file, converts it to text, and then sends that text to a Google Apps Script function (google.script.run.importCSV(data)) for further processing.
The filtering function (filterData) takes the keyword entered by the user, applies the filter to the CSV data, and sends the filtered CSV data to the same Google Apps Script function for importing.

In simple terms, this web page allows users to

Drag and drop a CSV file onto the page.
Browse for a CSV file by clicking on the designated area.
Filter the data in the CSV file by entering a keyword.
When files are dropped or filtered, the data is sent to a server-side script (Google Apps Script) for processing, likely adding it to a Google Sheets document or performing other actions specified in the server-side script.

The working of the project has been shown in the demonstration video. 
