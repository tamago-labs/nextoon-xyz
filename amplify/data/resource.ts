import { type ClientSchema, a, defineData } from "@aws-amplify/backend";


const schema = a.schema({
  User: a
    .model({
      username: a.string().required(), // wallet address
      email: a.string(),
      displayName: a.string(),
      isApprovedCreator: a.boolean()
    })
    .authorization((allow) => [
      allow.publicApiKey()
    ]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});