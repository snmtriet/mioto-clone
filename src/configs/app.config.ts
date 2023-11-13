export type AppConfig = {
  apiPrefix: string
  authenticatedEntryPath: string
  unAuthenticatedEntryPath: string
}

const appConfig: AppConfig = {
  apiPrefix: '/api',
  authenticatedEntryPath: '/',
  unAuthenticatedEntryPath: '/sign-in',
}

export default appConfig
