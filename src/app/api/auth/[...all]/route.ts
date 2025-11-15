import { betterAuthInstance } from "@/lib/better-auth"
import { toNextJsHandler } from "better-auth/next-js"

export const { GET, POST } = toNextJsHandler(betterAuthInstance.handler)