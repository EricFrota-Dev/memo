import { useCallback, useEffect, useState } from "react";

export interface UseQueryProps<Data, Keys> {
  request: () => Promise<Data>;
  keys: Keys[];
}

function useQuery<Data, Keys, Error>({
  request,
  keys,
}: UseQueryProps<Data, Keys>) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();
  const [data, setData] = useState<Data>();
  const deps = JSON.stringify(keys);

  const performeRequest = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await request();
      setData(data);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deps]);

  useEffect(() => {
    performeRequest();
  }, [performeRequest, deps]);

  return { isLoading, error, data, revalidate: performeRequest };
}

export default useQuery;
