# MVC Architecture

MVC is a software architectural pattern used for developing user interfaces. It divides an application into interconnected components.


## Components

### Model
- Represents the data and the business logic of the application.

### View
- Displays the data to the user.
- Sends user commands to the controller.

### Controller
- Acts as an intermediary between the model and the view.
- Takes user input from the view, processes it (using the model), and updates the view accordingly.

## HTTP Methods

HTTP methods are used to perform different actions on resources identified by URLs in RESTful APIs. The most commonly used HTTP methods are:

- **GET**: Retrieves data from a resource without changing it.
- **POST**: Submits data to the server to create a new resource.
- **PUT**: Updates an existing resource or creates a new one if it does not exist.
- **DELETE**: Deletes a specific resource.
- **PATCH**: Applies partial modifications to a resource.
- **HEAD**: Similar to GET, but only retrieves the headers.
- **OPTIONS**: Describes the communication options for the target resource.


## HTTPS Status Codes
HTTP Status codes indicate the result of an HTTP request. They are grouped into five categories

## 1XX (Informational)

- **100 Continue**: The server has received the request headers, and the client should proceed to send the request body.
- **101 Switching Protocols**: The requester has asked the server to switch protocols.

## 2XX (Success)

- **200 OK**: The request has succeeded.
- **201 Created**: The request has been fulfilled, resulting in the creation of a new resource.
- **204 No Content**: The server successfully processed the request, but is not returning any content.

## 3XX (Redirection)

- **301 Moved Permanently**: The resource has been moved to a new URL permanently.
- **302 Found**: The resource is temporarily located at a different URL.
- **304 Not Modified**: The resource has not been modified since the last request.

## 4XX (Client Error)

- **400 Bad Request**: The server could not understand the request due to invalid syntax.
- **401 Unauthorized**: The client must authenticate itself to get the requested response.
- **403 Forbidden**: The client does not have access rights to the content.
- **404 Not Found**: The server can not find the requested resource.

## 5XX (Server Error)

- **500 Internal Server Error**: The server has encountered a situation it doesn't know how to handle.
- **502 Bad Gateway**: The server, while acting as a gateway, received an invalid response from the upstream server.
- **503 Service Unavailable**: The server is not ready to handle the request.


# MongoDB Methods
MongoDB is a NoSQL database that uses collections and documents.

## Insert Methods

- **insertOne()**: Inserts a single document into a collection.
- **insertMany()**: Inserts multiple documents into a collection.

## Query Methods

- **find()**: Retrieves documents from a collection that match a query filter.
- **findOne()**: Retrieves a single document from a collection that matches a query filter.

## Update Methods

- **updateOne()**: Updates a single document that matches a filter.
- **updateMany()**: Updates multiple documents that match a filter.
- **replaceOne()**: Replaces a single document that matches a filter with a new document.

## Delete Methods

- **deleteOne()**: Deletes a single document that matches a filter.
- **deleteMany()**: Deletes multiple documents that match a filter.

## Aggregation Methods

- **aggregate()**: Performs aggregation operations like grouping, sorting, and transforming data.

## Indexing Methods

- **createIndex()**: Creates an index on a collection.
- **dropIndex()**: Removes an index from a collection.

## Utility Methods

- **countDocuments()**: Returns the count of documents that match a query filter.
- **distinct()**: Finds the distinct values for a specified field across a single collection.


