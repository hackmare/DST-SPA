# DST-SPA
archiact RESTful SPA demo - built against https://morgane-test.herokuapp.com

This is a test application for an SPA:

Given these API endpoints:
GET /messages
GET /messages/{id}
DELETE /messages/{id}
POST /messages
at this url, build an SPA that allows the viewer to:

view a list of messages, displaying the message text and the date the message was posted
view all details of a single message
delete messages
allow posting a new message

Estimates so far for scope of work (given time limit)...this would best be in JIRA rather than here but we use what we have...:

1/2 hour to work out the logical design for the page and where state needs to be managed - if at all (it looks like the page state can just be kept in the query details), 
1 hour to code the GET query and paint the table (with 5 messages at a time) with next-messages capacity
1 hour to code the message details view - possibly as a pop-up overlay
1 hour to code the POST form to create a message.
1/4 hour for the delete GET message. 
