'use strict'

/*
|--------------------------------------------------------------------------
| Providers
|--------------------------------------------------------------------------
|
| Providers are building blocks for your Adonis app. Anytime you install
| a new Adonis specific package, chances are you will register the
| provider here.
|
*/
const providers = [
  '@adonisjs/framework/providers/AppProvider',
  '@adonisjs/framework/providers/ViewProvider',
 //'@adonisjs/lucid/providers/LucidProvider',
  '@adonisjs/bodyparser/providers/BodyParserProvider',
  '@adonisjs/cors/providers/CorsProvider',
  '@adonisjs/shield/providers/ShieldProvider',
  '@adonisjs/session/providers/SessionProvider',
  '@adonisjs/auth/providers/AuthProvider', 
  'lucid-mongo/providers/LucidMongoProvider',
  '@adonisjs/drive/providers/DriveProvider',
  '@adonisjs/validator/providers/ValidatorProvider',
  'adonis-scheduler/providers/SchedulerProvider'
]

/*
|--------------------------------------------------------------------------
| Ace Providers
|--------------------------------------------------------------------------
|
| Ace providers are required only when running ace commands. For example
| Providers for migrations, tests etc.
|
*/
const aceProviders = [
  '@adonisjs/lucid/providers/MigrationsProvider',
  //'lucid-mongo/providers/MigrationsProvider'
  'adonis-scheduler/providers/CommandsProvider'
]

/*
|--------------------------------------------------------------------------
| Aliases
|--------------------------------------------------------------------------
|
| Aliases are short unique names for IoC container bindings. You are free
| to create your own aliases.
|
| For example:
|   { Route: 'Adonis/Src/Route' }
|
*/
const aliases = {
  Scheduler: 'Adonis/Addons/Scheduler'
}

/*
|--------------------------------------------------------------------------
| Commands
|--------------------------------------------------------------------------
|
| Here you store ace commands for your package
|
*/
const commands = []

/*
|--------------------------------------------------------------------------
| Global Middlewares initialization
|--------------------------------------------------------------------------
|
| Here you can place global middlewares
|
*/
const globalMiddleware = [
  'Adonis/Middleware/AuthInit'
]

/*
|--------------------------------------------------------------------------
| Global Middlewares names
|--------------------------------------------------------------------------
|
| Here you can place global middleware names
|
*/
const namedMiddleware = {
  auth: 'Adonis/Middleware/Auth'
}


module.exports = { providers, aceProviders, aliases, commands }
