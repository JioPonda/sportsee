import axios from "axios";
import { useQuery } from "react-query";
import { SPORTSEE_API_HOST, SPORTSEE_MOKED } from "../Data/Api";

const getUserActivity = async (userId) => {
  const { data } = await axios.get(`${SPORTSEE_MOKED}/${userId}/activity`);
  return data;
};

export default function useUserActivity(userId) {
  return useQuery(["userActivity"], () => getUserActivity(userId), {
    select: (data) => {
      const formatedData = data.data.sessions.map((activity) => ({
        day: activity.day,
        kilogram: activity.kilogram,
        calories: activity.calories,
      }));

      return {
        data: formatedData,
      };
    },
  });
}
