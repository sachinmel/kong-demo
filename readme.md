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

### Using Declarative Approach
- Add `kong config db_import /home/kong/kong.yml &&` after the line `kong migrations bootstrap` in the Docker Compose file.

### 1. Add OAuth2 Plugin to Service
**Description:** Adds the OAuth2 plugin to the `items-service` to secure it with OAuth2 authentication.

### 2. Create OAuth2 App for Consumer
**Description:** Creates an OAuth2 application for the consumer `items-consumer`, enabling the client to obtain access tokens.

### 3. Migrate Access Token
**Description:** Generates an access token for the `items-consumer` using the authorization code flow.

### 4. View All Tokens
**Description:** Retrieves a list of all tokens associated with the consumer `items-consumer`.

---

## Web GUI Approach

### Step 1: Add Gateway Service
1. Navigate to 'Gateway Service'.
2. Add a new gateway service.
3. Enter the service name (`items-service`) and the API host URL (`http://localhost:3000`).

### Step 2: Add Route
1. Navigate to 'Routes'.
2. Add a new route.
3. Enter the route name (`items-route`).
4. Select the service you want to associate with the route (`items-service`).
5. Add the path of the API route to be directed by the Kong route (`/items`).

### Step 3: Enable Rate Limiting Plugin
1. Navigate to 'Plugins'.
2. Add a new plugin.
3. Enable **Rate Limiting**.
4. Enter the rate limiting conditions in the form (e.g., 10 requests per minute).

### Step 4: Enable Proxy Cache Plugin
1. Navigate to 'Plugins'.
2. Add a new plugin.
3. Enable **Proxy Cache**.
4. Select the strategy as **memory**.

---

## ExpressJS CRUD Endpoints
Use the `access_token` generated in step 3 of the Postman flow to authenticate requests to the ExpressJS CRUD endpoints.

---

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

## Kong Configuration URLs
- **Kong API URL:** [http://localhost:8001](http://localhost:8001)
- **Kong GUI Host:** [http://localhost:8002](http://localhost:8002)
- **Kong Proxy for API:** [http://localhost:8000](http://localhost:8000)
- **Express API Host:** [http://localhost:3000](http://localhost:3000)

