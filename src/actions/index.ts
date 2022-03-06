import { getJsonFromApi } from "../mockup/apiCall";

export enum ActionType {
  QueryTyped = "QUERY_TYPED",
  DownloadTasks = "DOWNLOAD_TASKS",
}

export const searchQuery = (query: string) => {
  return {
    type: ActionType.QueryTyped,
    payload: query,
  };
};

export const downloadTasks = () => {
  return async (dispatch: any, ) => {
    const response = await getJsonFromApi();

    dispatch({
      type: ActionType.DownloadTasks,
      payload: JSON.stringify(response),
    });
  };
};
