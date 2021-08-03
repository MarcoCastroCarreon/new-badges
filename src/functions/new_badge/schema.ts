export default {
  type: 'object',
  properties: {
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    twitter: { type: 'string' },
    email: { type: 'string' },
    company: { type: 'string' },
    avatarStyle: { type: 'string' },
  },
  required: ['firstName', 'lastName', 'email'],
} as const;
