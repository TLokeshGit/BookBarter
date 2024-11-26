### NovelShare

NovelShare simplifies the book-sharing experience for bibliophiles by facilitating secure and organized book exchanges within a community of like-minded readers. It is an online platform designed for avid readers to connect and share their literary interests. Users can register their books on the platform, making them visible in their profiles for exchange with other users.

![image](https://github.com/desmondlb/BookBarter/blob/main/frontend/assets/frontpage.png)

## Technologies Used

- **Front-end:** HTML, CSS3, JavaScript, Bootstrap
- **Back-end:** Node.js, Express.js
- **Database:** SQLite
- **Authentication:** JWT (JSON Web Tokens)
- **Deployment:** Heroku, Netlify
- **Version Control:** Git, GitHub

## API Endpoints

### User Routes

- **POST /user/create**
  
  Create a new user.
  
  **Parameters:**
  
  - `user_id` (string, required)
  - `password_hash` (string, required)
  - `email` (string, required)
  - `phone_number` (string, required)
  - `address` (string, required)
  - `first_name` (string, required)
  - `last_name` (string, required)
  - `latitude` (number, optional)
  - `longitude` (number, optional)
  - `is_auth` (boolean, required)
  
  **Responses:**
  
  - `201 Created` – User successfully created.
  - `400 Bad Request` – Invalid input or duplicate email/phone number.
  - `500 Internal Server Error` – Server error.

- **POST /user/login**
  
  Authenticate a user and generate a JWT.
  
  **Parameters:**
  
  - `user_id` (string, required)
  - `password_hash` (string, required)
  
  **Responses:**
  
  - `200 OK` – Successful login with token.
  - `404 Not Found` – User not found.
  - `400 Bad Request` – Invalid credentials.
  - `500 Internal Server Error` – Server error.

### Request Routes

- **POST /requests/raiseBorrowRequest**
  
  Raise a borrow request for a book listing.
  
  **Headers:**
  
  - `Authorization: Bearer <token>`
  
  **Parameters:**
  
  - `borrowDuration` (number, required)
  - `listingId` (number, required)
  
  **Responses:**
  
  - `201 Created` – Request successfully created.
  - `400 Bad Request` – Invalid parameters.
  - `404 Not Found` – Listing not found.
  - `500 Internal Server Error` – Server error.

- **GET /requests/getPendingActions**
  
  Retrieve pending actions for the authenticated user.
  
  **Headers:**
  
  - `Authorization: Bearer <token>`
  
  **Responses:**
  
  - `200 OK` – Returns list of pending actions.
  - `500 Internal Server Error` – Server error.

- **PUT /requests/approveRequest**
  
  Approve a borrow request.
  
  **Headers:**
  
  - `Authorization: Bearer <token>`
  
  **Parameters:**
  
  - `requestId` (number, required)
  
  **Responses:**
  
  - `200 OK` – Request approved successfully.
  - `404 Not Found` – Request not found.
  - `500 Internal Server Error` – Server error.

- **PUT /requests/handleShipmentReceive**
  
  Handle shipment receipt for a request.
  
  **Headers:**
  
  - `Authorization: Bearer <token>`
  
  **Parameters:**
  
  - `requestId` (number, required)
  
  **Responses:**
  
  - `200 OK` – Shipment received successfully.
  - `404 Not Found` – Request not found.
  - `500 Internal Server Error` – Server error.

- **DELETE /requests/closeRequest**
  
  Close a borrow request.
  
  **Headers:**
  
  - `Authorization: Bearer <token>`
  
  **Parameters:**
  
  - `requestId` (number, required)
  
  **Responses:**
  
  - `204 No Content` – Request closed successfully.
  - `400 Bad Request` – Invalid request ID.
  - `500 Internal Server Error` – Server error.

- **DELETE /requests/invalidateOldRequests**
  
  Invalidate old borrow requests.
  
  **Headers:**
  
  - `Authorization: Bearer <token>`
  
  **Responses:**
  
  - `204 No Content` – Old requests invalidated successfully.
  - `500 Internal Server Error` – Server error.

### Payment Routes

- **POST /payment/card/add**
  
  Add a new payment card for the authenticated user.
  
  **Headers:**
  
  - `Authorization: Bearer <token>`
  
  **Parameters:**
  
  - `email` (string, required)
  - `paymentMethodId` (string, required)
  
  **Responses:**
  
  - `200 OK` – Card successfully added.
  - `500 Internal Server Error` – Server error.

- **GET /payment/getCards/:borrowerId**
  
  Retrieve payment cards for a specific borrower.
  
  **Headers:**
  
  - `Authorization: Bearer <token>`
  
  **Parameters:**
  
  - `borrowerId` (string, required)
  
  **Responses:**
  
  - `200 OK` – Returns list of cards.
  - `404 Not Found` – No cards found.
  - `500 Internal Server Error` – Server error.

### BookListing Routes

- **PUT /booklisting/updateBookStatus**
  
  Update the status of a book listing.
  
  **Headers:**
  
  - `Authorization: Bearer <token>`
  
  **Parameters:**
  
  - `book_id` (number, required)
  - *(Additional relevant parameters)*
  
  **Responses:**
  
  - `200 OK` – Listing status updated.
  - `400 Bad Request` – Invalid input.
  - `500 Internal Server Error` – Server error.

### Home Routes

- **GET /home/getSuccessfulTransaction**
  
  Retrieve successful transactions.
  
  **Responses:**
  
  - `200 OK` – Returns transaction data.
  - `404 Not Found` – No transactions found.
  - `500 Internal Server Error` – Server error.

- **GET /home/getTopLenders**
  
  Retrieve top lenders.
  
  **Responses:**
  
  - `200 OK` – Returns list of top lenders.
  - `500 Internal Server Error` – Server error.

- **GET /home/getBooksMaxRequest**
  
  Retrieve books with the maximum requests.
  
  **Responses:**
  
  - `200 OK` – Returns list of books.
  - `500 Internal Server Error` – Server error.

## Contributing Guide

1. Fork this repository.
   - Click the "Fork" button at the top-right corner of this repository page on GitHub to create a copy under your own GitHub account.
2. Clone the forked repository onto your computer.
