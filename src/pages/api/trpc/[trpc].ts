import { AppRouter } from "@/backend/router";
import { inferProcedureOutput } from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
// export API handler
export default trpcNext.createNextApiHandler({
  router: AppRouter,
  createContext: () => null,
});

export type inferQueryResponse<
  TRoutekey extends keyof AppRouter["_def"]["queries"]
> = inferProcedureOutput<AppRouter["_def"]["queries"][TRoutekey]>;
