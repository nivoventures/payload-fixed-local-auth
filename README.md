# Payload Fixed Local Auth

A Payload CMS authentication strategy that provides automatic login with a fixed local user. This is useful for development and testing environments where you want to bypass the authentication process.

## Installation

```bash
npm install @nivoventures/payload-fixed-local-auth
```

## Usage

```typescript
import { createFixedLocalAuth } from '@nivoventures/payload-fixed-local-auth';

// In your Payload config
export default buildConfig({
  // ... other config
  auth: {
    // This will disable the built-in auth pages of payload, but tell it to keep the database columns.
    // If you're not going to ever use password auth (eg, you have some other solution for production),
    // then this can simply be `disableLocalStrategy: true`. You'll need to add in an email field
    // though, like
    // export const Users: CollectionConfig = {
    //   ...
    //   fields: [
    //     {
    //       name: 'email',
    //       type: 'text',
    //       required: true
    //     }
    //   ]
    //   ...
    // }
    disableLocalStrategy: {
      enableFields: true
    },
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

