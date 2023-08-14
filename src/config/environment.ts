export const enum APP_ENV {
  DEVELOPMENT = "development",
  PRODUCTION = "production",
  TEST = "test",
}

export const ENV = {
  APP_ENV: process.env.NEXT_PUBLIC_APP_ENV as APP_ENV || APP_ENV.DEVELOPMENT,
}