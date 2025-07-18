<h2>This example project is cloned from github <a href="https://github.com/monikakonieczna/playwright-ts-project">repo</a> by user <a href="https://github.com/monikakonieczna">monikakonieczna</a>
The original provided an example project with automated tests for the mock online store <a href="https://www.saucedemo.com/">Swag Labs</a></h2>

<h3>Test scenarios covered in the original repo grouped by functionality:</h3>
1. Login
	- Positive scenario: login with user - standard, problem and performance user (all seprate tests)
	- Negative scenatio: login wihtout credentials
	- Negative scenario: login without password
	- Negative scenario: login without usernanme

2. Cart
	- Positive scenario: User adds Backpack item to the cart and check the cart page for update
	- Positive scenario: User adds Backpack item to the cart and check the cart badge for update
	- Positive scenario: User adds Backpack item to the cart and removes it from the cart via the products page button
	- Positive scenario: User adds Backpack item to the cart and then adds a Bike-light item to the cart

3. Products page sorting
	- Positive scenario: Sort items via price low to high
	- Positive scenario: Sort items via price high to low
	- Positive scenario: Sort items via name a to z 
	- Positive scenario: Sort items via name z to a
	
<h3>Test scenarios added with this project</h3>
1. Login
	- Positive scenario: Login after unsuccessfull login attempt when not inputting password
	- Positive scenario: Login after unsuccessfull login attempt when not inputting username
	
2. Products page
	- Positive scenario: User presses the About link in the side menu
	
3. Single product page:
	- Positive scenario: User adds Backapck item to the cart and check the cart page for update
	
<h3>Other new additions in this repo</h3>
	- Implemented trace recording instead of video for each test
	
<h3>Tests and functionalities to be added in the future:</h3>
	- Add parameters to single product so that they cover every product available
	- Add addtional tests for login to check automatic timeout and logout