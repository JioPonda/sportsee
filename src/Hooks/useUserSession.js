import axios from "axios";
import { useQuery } from "react-query";
import { SPORTSEE_API_HOST, SPORTSEE_MOKED } from "../Data/Api";

const useDay = ["L", "M", "M", "J", "V", "S", "D"];

const getUserSession = async (userId) => {
  const { data } = await axios.get(
    `${SPORTSEE_MOKED}/${userId}/average-sessions`
  );
  return data;
};

export default function useUserSession(userId) {
  return useQuery(["userSession"], () => getUserSession(userId), {
    select: (data) => {
      const formatedData = data.data.sessions.map((sessions) => ({
        day: useDay[+sessions.day - 1],
        sessionLength: sessions.sessionLength,
      }));

      return {
        data: formatedData,
      };
    },
  });
}
