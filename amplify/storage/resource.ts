import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
    name: 'nextoonContent',
     access: (allow) => ({ 
    'images/*': [
      allow.guest.to(['read', 'write'])
    ],
  })
});