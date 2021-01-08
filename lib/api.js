const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query, { variables } = {}) {
  const headers = { "Content-Type": "application/json" };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      "Authorization"
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    // eslint-disable-next-line no-console
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      testPages(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  return data?.testPages;
}

export async function getSiteMetadata() {
  const data = await fetchAPI(`
{
  siteConfig(id: "en", idType: SLUG) {
    getContent {
      siteDescription
      siteKeywords
      siteLanguage
      siteTitle
      siteUrl
      socialCover {
        sourceUrl
      }
    }
  }
}
  `);
  return data;
}
export async function getTestingPage() {
  const data = await fetchAPI(`
  {
  testing(id: "testing", idType: SLUG) {
    getContent {
      heroText
      text
      title
      heroImage {
        sourceUrl
      }
      image {
        sourceUrl
      }
    }
    slug
  }
}

  `);
  return data;
}

export async function getPostAndMorePosts(slug) {
  const data = await fetchAPI(
    `
    query PostBySlug($id: ID!, $idType: TestPageIdType!) {

  testPage(id: $id, idType: $idType) {
    slug
    getContent {
      title
      image {
        sourceUrl
        altText
      }
    }
  }
}`,
    {
      variables: {
        id: slug,
        idType: "SLUG",
      },
    }
  );
  return data;
}
