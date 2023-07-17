const mapping: Record<string, string> = {
  advertisements: 'advertisement',
  companies: 'company',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
