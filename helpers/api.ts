const apiUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/api`;

export const API = {
  topPage: {
    find: `${apiUrl}/top-page/find`,
    byAlias: `${apiUrl}/top-page/byAlias`,
  },
  product: {
    find: `${apiUrl}/product/find`,
  },
  review: {
    createDemo: `${apiUrl}/review/create-demo`,
  },
};
