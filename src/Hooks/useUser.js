import axios from "axios";
import { useQuery } from "react-query";
import { SPORTSEE_API_HOST, SPORTSEE_MOKED } from "../Data/Api";

const getUser = async (userId) => {
  const { data } = await axios
    .get(`${SPORTSEE_MOKED}/${userId}`)
    .catch(function (error) {
      console.log(error);
    });
  return data;
};

export default function useUser(userId) {
  return useQuery(["user"], () => getUser(userId), {
    select: (data) => {
      const formatedData = {
        userid: data.data.id,
        userInfos: data.data.userInfos,
        score: data.data.score,
        keyData: data.data.keyData,
      };

      return {
        data: formatedData,
      };
    },
  });
}
