import axios from "axios";
import { useQuery } from "react-query";
import { SPORTSEE_API_HOST, SPORTSEE_MOKED } from "../Data/Api";

const getUserPerformance = async (userId) => {
  const { data } = await axios.get(`${SPORTSEE_MOKED}/${userId}/performance`);
  return data;
};

export default function useUserPerformance(userId) {
  return useQuery(["userPerformance"], () => getUserPerformance(userId), {
    select: (data) => {
      const formatedData = data.data.data.map((skill) => ({
        value: skill.value,
        kind: data.data.kind[skill.kind],
      }));

      return {
        data: formatedData,
      };
    },
  });
}
