import { compile } from "path-to-regexp"
import { matchPath } from "react-router-dom"

export const pathToUrl = (
  path: string,
  params: Record<string, string | undefined> = {}
) => {
  if (Object.keys(params).some((key) => !params[key] || !params[key]?.length)) {
    return path
  }
  return compile(path)(params)
}

export const isActiveRoute = (activeRule: Array<Readonly<string>>): boolean => {
  return activeRule.some((path) =>
    matchPath({ path: path }, location.pathname),
  )
}