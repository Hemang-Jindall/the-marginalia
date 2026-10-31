
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: { site: URL }) {
  const base = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  const siteUrl = new URL(base, context.site).toString();

  const posts = (await getCollection("posts"))
    .filter((post) => !post.data.draft)
    .sort(
      (a, b) =>
        b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
    );

  return rss({
    title: "The Marginalia — Essays, Fiction & Reflections",
    description:
      "An independent literary journal by Hemang Jindal. Essays on philosophy, fiction, ethics, and the questions that deserve a second look.",
    site: siteUrl,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `${siteUrl}posts/${post.id.replace(/\.md$/, "")}/`,
      categories: [post.data.category],
    })),
    customData: `<language>en-us</language>`,
  });
}
