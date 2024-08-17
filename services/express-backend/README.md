# Project Structure

> 
    |--e2e                      # Integration tests
    |--prisma                   # Prisma models and configuration 
    |--src
        |-- api
            |-- routes.ts           # The list of routes
            |-- <service-name>      # The service name
                |-- controller      # Controllers that handles input and call appropriate 
                |-- service         # Services that handles all business logic 
                |-- repository      # Repositories that handles database interaction, Prisma provides these out of the box but there might be cases where custom repository or an extension of prisma repository is needed, put all of those here.
                |-- routes.ts       # Additional routes if necessary
        |-- app.ts              # App Entry Point
        |-- config              # Environment variables and configuration files
        |-- prisma              # Prisma models and configuration
        |-- jobs                # Jobs definitions for agenda.js
        |-- types               # Global type declaration files (d.ts) for Typescript
        |-- subscribers         # Event handlers for async task