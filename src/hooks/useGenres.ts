import { useEffect, useState } from "react";
import apiClient from "../services/apiClient ";
import { CanceledError } from "axios";

interface Genres {
  id: number;
  name: string;
}

export interface FetchGenre {
  count: number;
  results: Genres[];
}

const useGenres = () => {
  const [genres, setGenre] = useState<Genres[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchGenre>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenre(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
