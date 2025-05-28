# Payload Fixed Local Auth

A Payload CMS authentication strategy that provides automatic login with a fixed local user. This is useful for development and testing environments where you want to bypass the authentication process.

## Installation

```bash
npm install payload-fixed-local-auth
```

## Usage

```typescript
import { createFixedLocalAuth } from 'payload-fixed-local-auth';

// In your Payload config
export default buildConfig({
  // ... other config
  auth: {
    disabledisableLocalStrategy: true,
    strategies: [
      createFixedLocalAuth({
        defaultUserEmail: 'test@test.com' // sets the email that the auto-authenticated user will use
      })
    ]
  }
});
```

## Features

- Automatically creates a default user if it doesn't exist
- Configurable default user email
- TypeScript support
- Works with Payload CMS v3.39.1 and above

## License

MIT

