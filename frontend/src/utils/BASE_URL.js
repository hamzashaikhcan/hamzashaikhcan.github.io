const BASE_URL = 'https://hamzashaikhcan.herokuapp.com/api/';
const DOWNLOAD_URL = 'https://hamzashaikhcan.herokuapp.com/';
const endpoints = {
	PORTFOLIO: {
		ADD: {
			type: 'POST',
			url: 'portfolio/',
		},
		GET_BY_ID: {
			type: 'GET',
			url: 'portfolio/',
		},
	},
};

export { BASE_URL, DOWNLOAD_URL, endpoints };
