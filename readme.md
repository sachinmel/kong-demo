# Kong OAuth2 Setup and Usage Guide

## How to Run

### 1. Start Kong with Docker Compose
Run the following command to start Kong and its dependencies:
```bash
docker compose up
```
This will start Kong along with its configured services, routes, and plugins.

### 2. Interact with Kong Using Postman
Use the provided Postman collection file to set up and interact with the OAuth2 plugin, services, and consumers.

---

## Postman Endpoints

### 1. Add OAuth2 Plugin to Service
**Description:** Adds the OAuth2 plugin to the `items-service` to secure it with OAuth2 authentication.

### 2. Create OAuth2 App for Consumer
**Description:** Creates an OAuth2 application for the consumer `items-consumer`, enabling the client to obtain access tokens.

### 3. Migrate Access Token
**Description:** Generates an access token for the `items-consumer` using the authorization code flow.

### 4. View All Tokens
**Description:** Retrieves a list of all tokens associated with the consumer `items-consumer`.

---

## ExpressJS CRUD Endpoints
- use access_token generated in 3rd step of postman

## Keywords Used in Kong

### 1. Services and Routes
- **Services:** Define the upstream services that Kong proxies requests to (e.g., `items-service`).
- **Routes:** Define how incoming requests are mapped to services (e.g., `/items`).

### 2. Plugins
- Extend Kong's functionality with features like authentication, rate limiting, and logging.
- Example: The OAuth2 plugin secures a service by requiring OAuth2 tokens for access.

### 3. Consumers
- Represents the users or clients that access the services.
- Each consumer can be assigned credentials (e.g., API keys, OAuth2 credentials) for authentication.

---

This guide provides the necessary steps to set up and use OAuth2 with Kong for the `items-service`. Feel free to modify the configuration to suit your use case.
