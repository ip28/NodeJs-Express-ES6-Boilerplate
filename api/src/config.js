
// static class variables which get initialized automatically.
class Config
{
	static get port(){
		return process.env.PORT;
	}
	static get username(){
		return process.env.USERNAME;
	}
	static get password(){
		return process.env.PASSWORD;
	}
	static get url(){
		return process.env.URL;
	}
}

export default Config;
