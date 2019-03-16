

const configApi = {
	baseUrl:process.env.NODE_ENV == "development" ? "/api" : config.baseUrl
}

export default configApi;