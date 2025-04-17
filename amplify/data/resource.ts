import { type ClientSchema, a, defineData } from "@aws-amplify/backend";


const schema = a.schema({
  User: a
    .model({
      username: a.string().required(), // wallet address
      email: a.string(),
      displayName: a.string(),
      contents: a.hasMany('Content', "userId"),
    })
    .authorization((allow) => [
      allow.publicApiKey()
    ]),
  Content: a
    .model({
      userId: a.id().required(),
      user: a.belongsTo('User', "userId"),
      title: a.string(),
      genre: a.string(),
      description: a.string(),
      coverImageUrl: a.string(),
      isTestnet: a.boolean(),
      tokenName: a.string(),
      tokenSymbol: a.string(),
      tokenContract: a.string(),
      tokenPrice: a.float(),
      episodes: a.hasMany('Episode', "contentId"),
    })
    .authorization((allow) => [
      allow.publicApiKey()
    ]),
  Episode: a
    .model({
      contentId: a.id().required(),
      content: a.belongsTo('Content', "contentId"),
      title: a.string(),
      description: a.string(),
      isActive: a.boolean(),
      pages: a.string().array(),
      isTokenGated: a.boolean(),
      minimumToken: a.integer()
    }).authorization((allow) => [
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