const BASE_URL = 'https://hamzashaikhcan.herokuapp.com/api/';
const LOCAL_URL = 'http://localhost:9001/api/';
const DOWNLOAD_URL = 'https://hamzashaikhcan.herokuapp.com/downloads/';
const endpoints = {
	PORTFOLIO: {
		ADD: {
			type: 'POST',
			url: `${LOCAL_URL}portfolio/`,
		},
		GET_BY_ID: {
			type: 'GET',
			url: `${LOCAL_URL}portfolio/`,
		},
	},
	NEWSLETTER: {
		ADD: {
			type: 'POST',
			url: `${LOCAL_URL}newsletter/`,
		},
		GET_BY_ID: {
			type: 'GET',
			url: `${LOCAL_URL}newsletter/`,
		},
	},
	CONTACT: {
		ADD: {
			type: 'POST',
			url: `${LOCAL_URL}contact/`,
		},
		GET_BY_ID: {
			type: 'GET',
			url: `${LOCAL_URL}contact/`,
		},
	},
};

export { BASE_URL, DOWNLOAD_URL, endpoints };
