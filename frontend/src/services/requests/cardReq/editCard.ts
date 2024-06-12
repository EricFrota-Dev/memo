import { AxiosResponse } from "axios";
import { dataBaseApi } from "../../api";

export interface EditCardProps {
  id: string;
  status: string;
}

async function editCard({ id, status }: EditCardProps) {
  try {
    await dataBaseApi.put<AxiosResponse>(`card`, {
      id,
      status,
    });
  } catch (err) {
    console.error("Erro ao chamar a API para editar o card:", err);
  }
}

export default editCard;
