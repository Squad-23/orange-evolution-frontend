import { Api } from "../providers/Api";

const markContent = () => Api.patch('');
const dismarkContent = () => Api.patch('');

export const ContentServices = {
    markContent,
    dismarkContent

    
};

