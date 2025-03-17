import { useState, useEffect } from "react";

import { AxiosRequestConfig, CanceledError } from "axios";
import apiClient from "../services/apiClient ";

const useGameInfo = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig
) => {
  const [data, setData] = useState<T | null>(null); // ✅ Ensure it stores a single object
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<T>(endpoint, {
        signal: controller.signal,
        ...requestConfig,
      })
      .then((res: any) => {
        setData(res.data); // ✅ Directly store the game object (not res.data.results)
        setLoading(false);
      })
      .catch((err: any) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, [endpoint]);

  return { data, error, isLoading };
};

export default useGameInfo;
