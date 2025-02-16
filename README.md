# Movie-Ticket-Booking-WebApp

## Bug 1: Moving the Seat Booking Matrix to the Middle.

### Initial Commit
![Initial Bug](./project/assests/Initial%20Bug.png)

### Final Output
![Final Output](./project/assests/Final%20Output.png)

## Bug 2: Added Hyperlinks to Home & BookMyShow Component

![Hyperlinks directing to Home Page](./project/assests/HyperLinks.gif)

## Bug 3: Role-Based Access Control
### Problem:
Previously, users were able to access the /admin and /mentor panels regardless of their roles. Similarly, mentors could access the /admin panel, leading to unauthorized access to restricted areas of the application.

### Expected Behavior
Users should only be able to access panels that correspond to their roles:

- Admins should have access to the /admin panel.
- mentors should have access to the /mentor panel.
- Unauthorized users should not have access to any restricted panels and should be redirected appropriately.

### Solution:
Implemented a role-based access control system to ensure that users can only access panels for which they have the appropriate roles. Unauthorized users attempting to access restricted panels will be redirected to the Unauthorized page (/unauthorised).

### Unauthorized Page

![Unauthorized Page](./project/assests/Access%20Control.png)


## Bug 4: Booked Seats Being Considered for Booking

### Problem
When a user clicks on a seat that has already been booked, the "Pay Now" button appears, and the amount of the booked seat is included in the total price and selected seats. This should not happen, as booked seats should not be available for selection.

![Rebooking Bug](./project/assests/Rebooking%20Bug.png)

### Expected Behavior
Users should only be able to book unbooked seats. Once a payment is successful, the booking details should be updated in the database, and the user should be redirected to the "/profile" page.

### Solution
To prevent booked seats from being selected and included in the total price, the onClick handler for seat selection was updated. This ensures that booked seats cannot be selected or deselected by users.

![Disabled Rebooking of the same seat](./project/assests/Disabled%20Rebooking.png)


## Bug 5: Booking Shows on Previous Dates

### Problem:
In the movie booking system, users could select dates prior to the current day for booking shows. This resulted in bookings being made for dates that had already passed, causing potential confusion and operational disruptions.

As of the current date, which is 22nd July, bookings for the 10th July were possible, as depicted in the following image.
![Pre dated booking](./project/assests/Pre-Dated%20Booking%20Bug.png)

### Expected Behavior
Users should only be allowed to book shows for today or future dates. The system should prevent the selection of past dates in the date picker input, ensuring that all bookings are relevant and valid for upcoming shows.

### Solution:
The date selection input has been updated to disable selection of past dates. This enhancement was implemented by setting the minimum allowable date (min attribute) of the date input field to today's date. As a result, users are now unable to choose a date earlier than the current day, thereby ensuring all bookings are made for valid showtimes.

![Disabled prev dates](./project/assests/Disabled%20Prev%20Dates.png)
