"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basecamp = void 0;
const n8n_workflow_1 = require("n8n-workflow");
class Basecamp {
    constructor() {
        this.description = {
            displayName: 'Basecamp',
            name: 'basecamp',
            icon: 'file:basecamp.svg',
            group: ['transform'],
            version: 1,
            subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
            description: 'Consume Basecamp API',
            defaults: {
                name: 'Basecamp',
            },
            inputs: ['main'],
            outputs: ['main'],
            credentials: [
                {
                    name: 'basecampApi',
                    required: true,
                },
            ],
            properties: [
                {
                    displayName: 'Resource',
                    name: 'resource',
                    type: 'options',
                    noDataExpression: true,
                    options: [
                        {
                            name: 'Project',
                            value: 'project',
                        },
                        {
                            name: 'Todo List',
                            value: 'todoList',
                        },
                        {
                            name: 'Todo',
                            value: 'todo',
                        },
                        {
                            name: 'Message',
                            value: 'message',
                        },
                    ],
                    default: 'project',
                },
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            resource: [
                                'project',
                            ],
                        },
                    },
                    options: [
                        {
                            name: 'Create',
                            value: 'create',
                            description: 'Create a project',
                            action: 'Create a project',
                        },
                        {
                            name: 'Get',
                            value: 'get',
                            description: 'Get a project',
                            action: 'Get a project',
                        },
                        {
                            name: 'Get All',
                            value: 'getAll',
                            description: 'Get all projects',
                            action: 'Get all projects',
                        },
                    ],
                    default: 'getAll',
                },
                // Project fields
                {
                    displayName: 'Project Name',
                    name: 'name',
                    type: 'string',
                    required: true,
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['project'],
                            operation: ['create'],
                        },
                    },
                    description: 'Name of the project to create',
                },
                {
                    displayName: 'Project ID',
                    name: 'projectId',
                    type: 'string',
                    required: true,
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['project'],
                            operation: ['get'],
                        },
                    },
                    description: 'ID of the project to retrieve',
                },
            ],
        };
    }
    async execute() {
        const items = this.getInputData();
        const returnData = [];
        const resource = this.getNodeParameter('resource', 0);
        const operation = this.getNodeParameter('operation', 0);
        let responseData;
        for (let i = 0; i < items.length; i++) {
            try {
                if (resource === 'project') {
                    if (operation === 'create') {
                        const name = this.getNodeParameter('name', i);
                        responseData = await this.helpers.request({
                            method: 'POST',
                            url: '/projects.json',
                            body: {
                                name,
                            },
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        });
                    }
                    else if (operation === 'get') {
                        const projectId = this.getNodeParameter('projectId', i);
                        responseData = await this.helpers.request({
                            method: 'GET',
                            url: `/projects/${projectId}.json`,
                        });
                    }
                    else if (operation === 'getAll') {
                        responseData = await this.helpers.request({
                            method: 'GET',
                            url: '/projects.json',
                        });
                    }
                }
                // Add implementation for other resources (todoList, todo, message) here
                if (Array.isArray(responseData)) {
                    returnData.push.apply(returnData, responseData.map(item => ({ json: item })));
                }
                else {
                    returnData.push({ json: responseData });
                }
            }
            catch (error) {
                if (this.continueOnFail()) {
                    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
                    returnData.push({ json: { error: errorMessage } });
                    continue;
                }
                if (error instanceof Error) {
                    const errorData = { message: error.message };
                    if (error.stack) {
                        errorData.stack = error.stack;
                    }
                    throw new n8n_workflow_1.NodeApiError(this.getNode(), errorData);
                }
                throw new n8n_workflow_1.NodeOperationError(this.getNode(), 'An unknown error occurred');
            }
        }
        return [returnData];
    }
}
exports.Basecamp = Basecamp;
//# sourceMappingURL=Basecamp.node.js.map