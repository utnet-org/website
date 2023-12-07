import request from "@/utils/request";

export const getStatistics = async () => await request({ url: "/home/statistics" })
