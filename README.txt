This example project is cloned from github repo by monikakonieczna https://github.com/monikakonieczna/playwright-ts-project
The original provided an example project with automated tests for the mock online store 'Swag labs'

Test scenarios covered in the original repo grouped by functionality:
1. Login
	a)Positive scenario: login with user - standard, problem and performance user (all seprate tests)
	b)Negative scenatio: login wihtout credentials
	c)Negative scenario: login without password
	d)Negative scenario: login without usernanme

2. Cart
	a)Positive scenario: User adds Backpack item to the cart and check the cart page for update
	b)Positive scenario: User adds Backpack item to the cart and check the cart badge for update
	c)Positive scenario: User adds Backpack item to the cart and removes it from the cart via the products page button
	d)Positive scenario: User adds Backpack item to the cart and then adds a Bike-light item to the cart

3.Products page sorting
	a)Positive scenario: Sort items via price low to high
	b)Positive scenario: Sort items via price high to low
	c)Positive scenario: Sort items via name a to z 
	d)Positive scenario: Sort items via name z to a
	
Test scenarios added with this project
1. Login
	a)Positive scenario: Login after unsuccessfull login attempt when not inputting password
	b)Positive scenario: Login after unsuccessfull login attempt when not inputting username
	
2. Products page
	a)Positive scenario: User presses the About link in the side menu
	
3. Single product page:
	a)Positive scenario: User adds Backapck item to the cart and check the cart page for update
	
Other new additions in this repo
1.Implemented trace recording instead of video for each test
	
Tests and functionalities to be added in the future:
1. Add parameters to single product so that they cover every product available
2. Add addtional tests for login to check automatic timeout and logout