const BASE_URL = 'http://hamzashaikhcan.herokuapp.com/api/';
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

export { BASE_URL, endpoints };
