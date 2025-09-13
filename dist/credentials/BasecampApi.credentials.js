"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasecampApi = void 0;
class BasecampApi {
    constructor() {
        this.name = 'basecampApi';
        this.displayName = 'Basecamp 3 API';
        this.documentationUrl = 'https://github.com/basecamp/bc3-api';
        this.properties = [
            {
                displayName: 'OAuth2 Client ID',
                name: 'clientId',
                type: 'string',
                default: '',
                required: true,
            },
            {
                displayName: 'OAuth2 Client Secret',
                name: 'clientSecret',
                type: 'string',
                typeOptions: {
                    password: true,
                },
                default: '',
                required: true,
            },
            {
                displayName: 'Authorization URL',
                name: 'authUrl',
                type: 'hidden',
                default: 'https://launchpad.37signals.com/authorization/new',
                required: true,
            },
            {
                displayName: 'Access Token URL',
                name: 'accessTokenUrl',
                type: 'hidden',
                default: 'https://launchpad.37signals.com/authorization/token',
                required: true,
            },
            {
                displayName: 'Scope',
                name: 'scope',
                type: 'hidden',
                default: '',
                required: true,
            },
            {
                displayName: 'Auth URI Query Parameters',
                name: 'authQueryParameters',
                type: 'hidden',
                default: 'type=web_server',
                required: true,
            },
        ];
        this.authenticate = {
            type: 'generic',
            properties: {
                headers: {
                    'User-Agent': '={{$credentials.clientId}} ({{$credentials.email}})',
                    Authorization: '=Bearer {{$credentials.oauthTokenData.access_token}}',
                },
            },
        };
        this.test = {
            request: {
                baseURL: 'https://3.basecampapi.com',
                url: '/authorization.json',
                method: 'GET',
            },
        };
    }
}
exports.BasecampApi = BasecampApi;
//# sourceMappingURL=BasecampApi.credentials.js.map