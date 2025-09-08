// Attachment resource for Basecamp
import { INodeProperties, IExecuteSingleFunctions, IHttpRequestOptions } from 'n8n-workflow';

export const attachmentOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['attachment'],
            },
        },
        default: 'createAttachment',
        options: [
            {
                name: 'Create Attachment',
                value: 'createAttachment',
                action: 'Create attachment',
                description: 'Uploads a file and returns an attachable SGID',
                routing: {
                    request: {
                        method: 'POST',
                        url: '=/attachments.json',
                    },
                },
            },
        ],
    },
];

export const attachmentFields: INodeProperties[] = [
    {
        displayName: 'POST /attachments.json',
        name: 'operation',
        type: 'notice',
        typeOptions: {
            theme: 'info',
        },
        default: '',
        displayOptions: {
            show: {
                resource: ['attachment'],
                operation: ['createAttachment'],
            },
        },
    },
    /*----------------------------------------
             Attachment: createAttachment Parameters
    ----------------------------------------*/
    {
        displayName: 'Binary Property',
        name: 'binaryPropertyName',
        type: 'string',
        default: 'data',
        required: true,
        description:
            'Name of the input item binary property that contains the file data',
        displayOptions: {
            show: {
                resource: ['attachment'],
                operation: ['createAttachment'],
            },
        },
        routing: {
            send: {
                preSend: [
                    async function (
                        this: IExecuteSingleFunctions,
                        requestOptions: IHttpRequestOptions,
                    ): Promise<IHttpRequestOptions> {
                        const binaryPropertyName = this.getNodeParameter(
                            'binaryPropertyName',
                        ) as string;

                        const item = this.getInputData();
                        if (!item.binary || !item.binary[binaryPropertyName]) {
                            throw new Error(
                                `No binary data found on property "${binaryPropertyName}"`,
                            );
                        }

                        const binaryData = item.binary[binaryPropertyName];
                        const dataBuffer = await this.helpers.getBinaryDataBuffer(
                            binaryPropertyName,
                        );

                        // Ensure proper content headers
                        requestOptions.headers = requestOptions.headers || {};
                        if (binaryData.mimeType) {
                            (requestOptions.headers as Record<string, string>)[
                                'Content-Type'
                            ] = binaryData.mimeType;
                        }
                        if (binaryData.fileSize) {
                            (requestOptions.headers as Record<string, string>)[
                                'Content-Length'
                            ] = String(binaryData.fileSize);
                        }

                        // Name query parameter
                        const filename = binaryData.fileName || 'file';
                        requestOptions.qs = {
                            ...(requestOptions.qs as Record<string, unknown>),
                            name: filename,
                        };

                        // Raw binary body
                        requestOptions.body = dataBuffer;
                        // n8n needs this to avoid JSON serialization of Buffer
                        (requestOptions as any).encoding = null;
                        (requestOptions as any).useStream = false;
                        return requestOptions;
                    },
                ],
            },
        },
    },
];


