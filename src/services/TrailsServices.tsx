import { Api } from "../providers/Api";

const getUserTrails = () => Api.get('user/id/trails');

export const TrailsServices = {
    getUserTrails
};