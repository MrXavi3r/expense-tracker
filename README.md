This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### REACT, NODE.js, EXPRESS, MONGOdB EXPENSE TRACKER APP

## Available Scripts

In the root directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.


### USER STORIES
Standard CRUD operations

ADD TRANSACTION
Add a transaction by navigating to the 'add new transaction' section, type in the name of the transaction in the 'text' input field, and the amount(a number) of the transaction in the 'amount' input field. If the amount is a negative number it will be logged as an expense and if the amount if a positive number it will be logged as income. Click the 'add transaction' button or hit the enter key in order to submit the transaction to the transaction list. Once added, the income and expenses or income fields will be updated accordingly.

TRANSACTION LIST
Submitted transactions will appear in the 'history' section. The most recent transactions will appear at the bottom of the list and the the oldest will appear at the top.

DELETE TRANSACTION
To delete a posted transaction, hover over the transaction in the list, and a red 'x' marker will appear immediately to the right of it, click the marker and the transaction will be deleted. This will automatically update the balance and income or expenses fields accordingly.

UPDATE TRANSACTION
there is no way to update a posted transaction at this time, as transactions are not meant to be edited. the best way to go about doing this if needed, would be to delete the necessary transaction and then add another as needed. 

