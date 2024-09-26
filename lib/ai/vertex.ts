import { createVertex } from "@ai-sdk/google-vertex";

export const vertexAi = createVertex({
  project: process.env.GOOGLE_PROJECT_ID as string,
  location: process.env.GOOGLE_LOCATION as string,
  googleAuthOptions: {
    credentials: require("./credentials.json"),
  },
});
