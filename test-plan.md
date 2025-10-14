# Tutorialsninja E-commerce Website - Comprehensive Test Plan

## Application Overview

Tutorialsninja is an e-commerce demonstration website that provides a complete online shopping experience. The application features:

- **User Management**: Registration, Login, My Account management
- **Product Catalog**: Categories, Search, Product listings, and Details
- **Shopping Cart**: Add, modify, remove items
- **Checkout Process**: Address selection, Payment methods, Order confirmation
- **Account Features**: Order history, Wish list, Newsletter subscription
- **Site Navigation**: Menu categories, Breadcrumbs, Search functionality

## Test Scenarios

### 1. User Account Management

#### 1.1 New User Registration
**Steps:**
1. Navigate to the homepage
2. Click on "My Account" dropdown
3. Select "Register"
4. Fill in all required fields:
   - First Name
   - Last Name
   - Email
   - Telephone
   - Password
   - Password Confirm
5. Select "Yes" or "No" for newsletter subscription
6. Check the Privacy Policy checkbox
7. Click "Continue" button

**Expected Results:**
- Account is successfully created
- User is redirected to account creation success page
- Welcome email is received
- User can log in with new credentials

#### 1.2 User Login
**Steps:**
1. Click on "My Account" dropdown
2. Select "Login"
3. Enter registered email address
4. Enter valid password
5. Click "Login" button

**Expected Results:**
- User successfully logs in
- User is redirected to My Account page
- Correct account information is displayed

### 2. Product Search and Navigation

#### 2.1 Category Navigation
**Steps:**
1. Hover over main menu categories
2. Click through different category levels
3. Use breadcrumb navigation

**Expected Results:**
- All category links are functional
- Correct products are displayed for each category
- Breadcrumb trail shows accurate navigation path

#### 2.2 Product Search
**Steps:**
1. Click on search box
2. Enter product name/keyword
3. Click search button or press Enter
4. Test filters and sort options:
   - Sort by name
   - Sort by price
   - Filter by category
   - Filter by price range

**Expected Results:**
- Relevant search results are displayed
- Sort functions work correctly
- Filters narrow down results appropriately
- "No results" message shown for invalid searches

### 3. Shopping Cart Operations

#### 3.1 Add Products to Cart
**Steps:**
1. Navigate to a product page
2. Select product options (if available):
   - Size
   - Color
   - Quantity
3. Click "Add to Cart" button
4. Verify cart update notification
5. View cart contents

**Expected Results:**
- Product successfully added to cart
- Cart icon updates with correct quantity
- Cart total updates accordingly
- Success message displayed

#### 3.2 Modify Cart
**Steps:**
1. Navigate to shopping cart
2. Update product quantities
3. Remove products
4. Apply/remove coupon codes
5. Update shipping estimate

**Expected Results:**
- Quantity updates reflect in total
- Products can be removed
- Valid coupon codes apply discount
- Shipping estimates update correctly

### 4. Checkout Process

#### 4.1 Guest Checkout
**Steps:**
1. Add products to cart
2. Proceed to checkout
3. Select "Guest Checkout"
4. Fill in billing details
5. Choose shipping method
6. Choose payment method
7. Review order
8. Confirm order

**Expected Results:**
- All forms accept valid data
- Order summary shows correct totals
- Order confirmation page displays
- Confirmation email received

#### 4.2 Registered User Checkout
**Steps:**
1. Login to account
2. Add products to cart
3. Proceed to checkout
4. Verify pre-filled information
5. Select/modify addresses
6. Choose shipping method
7. Choose payment method
8. Confirm order

**Expected Results:**
- Saved addresses available
- Payment methods accessible
- Order history updated
- Confirmation email received

### 5. Account Features

#### 5.1 Order History
**Steps:**
1. Login to account
2. Navigate to Order History
3. View past orders
4. Download invoices
5. Review order status

**Expected Results:**
- All orders listed correctly
- Order details accessible
- Invoices downloadable
- Status information accurate

#### 5.2 Wish List Management
**Steps:**
1. Login to account
2. Add items to wish list
3. View wish list
4. Move items from wish list to cart
5. Remove items from wish list

**Expected Results:**
- Items added successfully
- Wish list updates immediately
- Items move to cart correctly
- Items can be removed

### 6. Error Handling and Validation

#### 6.1 Form Validation
**Test Cases:**
- Submit empty required fields
- Enter invalid email formats
- Test password complexity requirements
- Try invalid phone numbers
- Submit mismatched passwords

**Expected Results:**
- Appropriate error messages displayed
- Form retains valid entered data
- Clear indication of required fields
- Helpful validation messages

#### 6.2 Payment Error Handling
**Test Cases:**
- Invalid card numbers
- Expired cards
- Incorrect CVV
- Insufficient funds scenarios
- Payment gateway timeouts

**Expected Results:**
- Clear error messages
- Option to retry payment
- Cart/order preserved
- Security measures maintained

## Test Environment Requirements

### Browser Coverage
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Device Coverage
- Desktop (1920x1080)
- Tablet (768x1024)
- Mobile (375x667)

### Network Conditions
- High-speed connection
- 3G network simulation
- Offline mode testing

## Success Criteria
- All critical paths function without errors
- Response times within acceptable limits
- Proper error handling throughout
- Cross-browser compatibility
- Mobile responsiveness
- Security measures validated

## Notes
- All tests should be performed on a clean browser session
- Cache and cookies should be cleared between test runs
- Test data should be reset to known state before each test
- Screenshots should be captured for failures
- All error messages should be documented
