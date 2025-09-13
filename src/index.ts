import { INodeType } from 'n8n-workflow';
import { ICredentialType } from 'n8n-workflow';

import { Basecamp } from './nodes/Basecamp/Basecamp.node';
import { BasecampApi } from './credentials/BasecampApi.credentials';

export {
	Basecamp,
	BasecampApi,
};

export const nodes: INodeType[] = [new Basecamp()];
export const credentials: ICredentialType[] = [new BasecampApi()];