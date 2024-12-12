export function getRoutePath(url: string) {
  const pathName = url.split("?")[0].split("/").pop();
  return pathName?.length ? pathName : "main";
}
