export const loginUser = async (data) => {
  const res = await fetch("http://localhost:3001/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

// API externa (series)
export const searchShows = async (query) => {
  const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
  return res.json();
};