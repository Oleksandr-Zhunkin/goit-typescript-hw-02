import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const getImage = async (page: number, query: string) => {
  const response = await axios.get<{ results: []; total_pages: number }>(
    "/search/photos",
    {
      params: {
        client_id: "h1rGXhlYcRjKB6gwtfD6rH93BVgZ-44TQ0p5cQjuoMk",
        query: `${query}`,
        page,
        per_page: 12,
      },
    }
  );

  return response.data;
};
