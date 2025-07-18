/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { Route as rootRouteImport } from './routes/__root'
import { Route as DashboardRouteImport } from './routes/dashboard'
import { Route as ChatRouteImport } from './routes/chat'
import { Route as AboutRouteImport } from './routes/about'
import { Route as IndexRouteImport } from './routes/index'
import { Route as ProductsIndexRouteImport } from './routes/products/index'
import { Route as DashboardIndexRouteImport } from './routes/dashboard.index'
import { Route as BlogIndexRouteImport } from './routes/blog/index'
import { Route as DashboardSettingsRouteImport } from './routes/dashboard.settings'
import { Route as DashboardProfileRouteImport } from './routes/dashboard.profile'
import { Route as DashboardAnalyticsRouteImport } from './routes/dashboard.analytics'
import { Route as ProductsFindProductIdRouteImport } from './routes/products/find/$productId'
import { Route as BlogFindPostIdRouteImport } from './routes/blog/find/$postId'

const DashboardRoute = DashboardRouteImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => rootRouteImport,
} as any)
const ChatRoute = ChatRouteImport.update({
  id: '/chat',
  path: '/chat',
  getParentRoute: () => rootRouteImport,
} as any)
const AboutRoute = AboutRouteImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)
const ProductsIndexRoute = ProductsIndexRouteImport.update({
  id: '/products/',
  path: '/products/',
  getParentRoute: () => rootRouteImport,
} as any)
const DashboardIndexRoute = DashboardIndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => DashboardRoute,
} as any)
const BlogIndexRoute = BlogIndexRouteImport.update({
  id: '/blog/',
  path: '/blog/',
  getParentRoute: () => rootRouteImport,
} as any)
const DashboardSettingsRoute = DashboardSettingsRouteImport.update({
  id: '/settings',
  path: '/settings',
  getParentRoute: () => DashboardRoute,
} as any)
const DashboardProfileRoute = DashboardProfileRouteImport.update({
  id: '/profile',
  path: '/profile',
  getParentRoute: () => DashboardRoute,
} as any)
const DashboardAnalyticsRoute = DashboardAnalyticsRouteImport.update({
  id: '/analytics',
  path: '/analytics',
  getParentRoute: () => DashboardRoute,
} as any)
const ProductsFindProductIdRoute = ProductsFindProductIdRouteImport.update({
  id: '/products/find/$productId',
  path: '/products/find/$productId',
  getParentRoute: () => rootRouteImport,
} as any)
const BlogFindPostIdRoute = BlogFindPostIdRouteImport.update({
  id: '/blog/find/$postId',
  path: '/blog/find/$postId',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/chat': typeof ChatRoute
  '/dashboard': typeof DashboardRouteWithChildren
  '/dashboard/analytics': typeof DashboardAnalyticsRoute
  '/dashboard/profile': typeof DashboardProfileRoute
  '/dashboard/settings': typeof DashboardSettingsRoute
  '/blog': typeof BlogIndexRoute
  '/dashboard/': typeof DashboardIndexRoute
  '/products': typeof ProductsIndexRoute
  '/blog/find/$postId': typeof BlogFindPostIdRoute
  '/products/find/$productId': typeof ProductsFindProductIdRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/chat': typeof ChatRoute
  '/dashboard/analytics': typeof DashboardAnalyticsRoute
  '/dashboard/profile': typeof DashboardProfileRoute
  '/dashboard/settings': typeof DashboardSettingsRoute
  '/blog': typeof BlogIndexRoute
  '/dashboard': typeof DashboardIndexRoute
  '/products': typeof ProductsIndexRoute
  '/blog/find/$postId': typeof BlogFindPostIdRoute
  '/products/find/$productId': typeof ProductsFindProductIdRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/chat': typeof ChatRoute
  '/dashboard': typeof DashboardRouteWithChildren
  '/dashboard/analytics': typeof DashboardAnalyticsRoute
  '/dashboard/profile': typeof DashboardProfileRoute
  '/dashboard/settings': typeof DashboardSettingsRoute
  '/blog/': typeof BlogIndexRoute
  '/dashboard/': typeof DashboardIndexRoute
  '/products/': typeof ProductsIndexRoute
  '/blog/find/$postId': typeof BlogFindPostIdRoute
  '/products/find/$productId': typeof ProductsFindProductIdRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/chat'
    | '/dashboard'
    | '/dashboard/analytics'
    | '/dashboard/profile'
    | '/dashboard/settings'
    | '/blog'
    | '/dashboard/'
    | '/products'
    | '/blog/find/$postId'
    | '/products/find/$productId'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/chat'
    | '/dashboard/analytics'
    | '/dashboard/profile'
    | '/dashboard/settings'
    | '/blog'
    | '/dashboard'
    | '/products'
    | '/blog/find/$postId'
    | '/products/find/$productId'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/chat'
    | '/dashboard'
    | '/dashboard/analytics'
    | '/dashboard/profile'
    | '/dashboard/settings'
    | '/blog/'
    | '/dashboard/'
    | '/products/'
    | '/blog/find/$postId'
    | '/products/find/$productId'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  ChatRoute: typeof ChatRoute
  DashboardRoute: typeof DashboardRouteWithChildren
  BlogIndexRoute: typeof BlogIndexRoute
  ProductsIndexRoute: typeof ProductsIndexRoute
  BlogFindPostIdRoute: typeof BlogFindPostIdRoute
  ProductsFindProductIdRoute: typeof ProductsFindProductIdRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/chat': {
      id: '/chat'
      path: '/chat'
      fullPath: '/chat'
      preLoaderRoute: typeof ChatRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/products/': {
      id: '/products/'
      path: '/products'
      fullPath: '/products'
      preLoaderRoute: typeof ProductsIndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/dashboard/': {
      id: '/dashboard/'
      path: '/'
      fullPath: '/dashboard/'
      preLoaderRoute: typeof DashboardIndexRouteImport
      parentRoute: typeof DashboardRoute
    }
    '/blog/': {
      id: '/blog/'
      path: '/blog'
      fullPath: '/blog'
      preLoaderRoute: typeof BlogIndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/dashboard/settings': {
      id: '/dashboard/settings'
      path: '/settings'
      fullPath: '/dashboard/settings'
      preLoaderRoute: typeof DashboardSettingsRouteImport
      parentRoute: typeof DashboardRoute
    }
    '/dashboard/profile': {
      id: '/dashboard/profile'
      path: '/profile'
      fullPath: '/dashboard/profile'
      preLoaderRoute: typeof DashboardProfileRouteImport
      parentRoute: typeof DashboardRoute
    }
    '/dashboard/analytics': {
      id: '/dashboard/analytics'
      path: '/analytics'
      fullPath: '/dashboard/analytics'
      preLoaderRoute: typeof DashboardAnalyticsRouteImport
      parentRoute: typeof DashboardRoute
    }
    '/products/find/$productId': {
      id: '/products/find/$productId'
      path: '/products/find/$productId'
      fullPath: '/products/find/$productId'
      preLoaderRoute: typeof ProductsFindProductIdRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/blog/find/$postId': {
      id: '/blog/find/$postId'
      path: '/blog/find/$postId'
      fullPath: '/blog/find/$postId'
      preLoaderRoute: typeof BlogFindPostIdRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

interface DashboardRouteChildren {
  DashboardAnalyticsRoute: typeof DashboardAnalyticsRoute
  DashboardProfileRoute: typeof DashboardProfileRoute
  DashboardSettingsRoute: typeof DashboardSettingsRoute
  DashboardIndexRoute: typeof DashboardIndexRoute
}

const DashboardRouteChildren: DashboardRouteChildren = {
  DashboardAnalyticsRoute: DashboardAnalyticsRoute,
  DashboardProfileRoute: DashboardProfileRoute,
  DashboardSettingsRoute: DashboardSettingsRoute,
  DashboardIndexRoute: DashboardIndexRoute,
}

const DashboardRouteWithChildren = DashboardRoute._addFileChildren(
  DashboardRouteChildren,
)

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  ChatRoute: ChatRoute,
  DashboardRoute: DashboardRouteWithChildren,
  BlogIndexRoute: BlogIndexRoute,
  ProductsIndexRoute: ProductsIndexRoute,
  BlogFindPostIdRoute: BlogFindPostIdRoute,
  ProductsFindProductIdRoute: ProductsFindProductIdRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
