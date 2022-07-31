import { AppRouter } from "@/backend/router";
import * as trpcNext from "@trpc/server/adapters/next";
// export API handler
export default trpcNext.createNextApiHandler({
  router: AppRouter,
  createContext: () => null,
});
