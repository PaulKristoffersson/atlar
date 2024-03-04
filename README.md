## Case work for Atlar
This simple application was developed for a case provided by Atlar. It enables an imaginary bank employee to perform four tasks.

## `Prerequisites`
To use the application, the user must download Node.js and npm, which can be done from the Node.js website.

The user is also required to have a TypeScript compiler, which can be installed through npm.

The dependencies, such as Material-UI and React Router, can be installed by running

### `npm install`

inside of the project directory. 

## `Instructions`
In the project directory, you can run:

### `npm start`

to run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

On the homepage, you will see the different accounts that exist across the three available banks. Here, the names of the accounts, their banks, the balances, as well as the currencies are displayed. The user can then click on the account name to delve into specific account information. To return to the homepage, the user can click the home icon on the top bar of each page.

After clicking the account name, the application will display some account information, a graph covering the account balance over the last fifty days (although, for the accounts provided in the example, the account balance never changes), and a table of the transactions made to and from the account. If a transaction has been returned, that transaction's row in the table will be marked in red. The same will occur if a payout from the account exceeds 5000 euros.

## Improvements to be made
The most glaring improvement to be made is the styling of the application. Based on the time constraints, I focused on the functionality of the application instead of the styling.

I also believe creating a separate tab that would show all payments exceeding 5000 euros would enable the user to complete that task more quickly, instead of having to go through each account one by one. Similarly, a tab for returned payments would also speed up the process of that task.

Aditionally, I believe creating the functionality to select the range of days displayed in the line graph would be beneficial.

Lastly, adding test to ensure that everything works correct should be done. 