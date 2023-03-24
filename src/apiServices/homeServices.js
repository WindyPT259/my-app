import { httpRequest } from "../utils";

const apiUrl = '/Home';

const homeServices = {

    // Get list option
    getList: () => {
        const url = `${apiUrl}/get-list`;
        return httpRequest.get(url);
    },
    createProject: (params) => {
        const url = `${apiUrl}/create-project`;
        return httpRequest.post(url, params)
    },
    downloadProject: () => {
        const url = `${apiUrl}/download-project`;
        return httpRequest.get(url)
    }

};

export default homeServices;