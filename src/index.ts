import { AuthStrategy } from 'payload'

export interface FixedLocalAuthOptions {
  defaultUserEmail: string;
}

export const createFixedLocalAuth = (options: FixedLocalAuthOptions): AuthStrategy => {
  const defaultUserEmail = options.defaultUserEmail;

  return {
    name: 'local',
    authenticate: async ({ payload }) => {
      let user = (await payload.find({
        collection: 'users',
        where: {
          email: { equals: defaultUserEmail }
        }
      })).docs[0];

      if (!user) {
        user = await payload.create({
          collection: 'users',
          data: {
            email: defaultUserEmail,
          }
        })
      }
      
      return {
        user: {
          email: user.email,
          collection: 'users',
          id: user.id
        },
      }
    }
  }
} 