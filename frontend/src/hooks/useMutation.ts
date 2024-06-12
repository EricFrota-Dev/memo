import { AxiosError } from "axios";
import { useCallback, useState } from "react";

interface UseMutationProps<Variables, Data> {
  request: (...variables: Variables[]) => Promise<Data>;
  onError?: (error: AxiosError) => void;
  onSuccess?: (data: Data) => void;
}

function useMutatation<Variables, Data>({
  request,
  onError,
  onSuccess,
}: UseMutationProps<Variables, Data>) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const performeRequest = useCallback(async (...variables: Variables[]) => {
    try {
      setIsLoading(true);
      const data = await request(...variables);
      if (onSuccess) onSuccess(data);
      return data;
    } catch (error) {
      if (onError && error instanceof AxiosError)
        onError(error.response?.data.error);
    } finally {
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isLoading, mutate: performeRequest };
}

export default useMutatation;
