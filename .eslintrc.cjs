module.exports = {
	"settings": {
		"jest": {
			"version": 27
		}
	},
	'plugins': ['jest'],
	'env': {
		'node': true,
		'es2021': true
	},
	'extends': ['airbnb-base', 'plugin:jest/recommended'],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'rules': {
		'no-console': [
			0
		],
		'import/extensions': [
			"error",
			"ignorePackages",
			{
				"js": "always",
			}
		],
		'no-unused-vars':  'off'
	}
}
