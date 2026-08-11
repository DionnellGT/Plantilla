import { useQuery } from "@tanstack/react-query";
import { getContactAction } from "../action/getContact.action";

export const useContact = () => {
  return useQuery({
    queryKey: ["landing", "contact"],
    queryFn: getContactAction,
    staleTime: Infinity,
  });
};
