import { AxiosResponse } from "axios";
import { dataBaseApi } from "../../api";

async function deleteCard(id: string) {
  await dataBaseApi.delete<AxiosResponse>("card", {
    params: {
      id: id,
    },
  });
}

export default deleteCard;
