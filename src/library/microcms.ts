// SDK利用準備
import type { MicroCMSQueries, MicroCMSListContent } from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

// 型定義
export type Blog = {
  id: string;
  slug: string;
  PageLinkExist: boolean;
  portfolioUrl: string;
  portfolioTitle: string;
  description: string;
  contents: string;
  portfolioImg: {
    url: string;
    height: number;
    width: number;
  };
  categories: {
    id: string;
    name: string;
    slug: string;
  };
} & MicroCMSListContent;

// APIの呼び出し
export const getBlogs = async (queries?: MicroCMSQueries) => {
  return await client.getList<Blog>({ endpoint: "portfolio", queries });
};

export const getBlogDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Blog>({
    endpoint: "portfolio",
    contentId,
    queries,
  });
};
