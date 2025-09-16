import { INodeType, NodeConnectionType, INodeTypeDescription } from "n8n-workflow"
import { N8NPropertiesBuilder } from "@devlikeapro/n8n-openapi-node"

import * as doc from "./Basecamp.api.json"

const parser = new N8NPropertiesBuilder(doc, {})
const properties = parser.build()

const name = "basecamp"
const displayName = "Basecamp"

export class Basecamp implements INodeType {
  description: INodeTypeDescription = {
    name,
    displayName,
    // The icon file is stored in the same directory as the node
    icon: 'file:Basecamp.svg',
    description: "Interact with the Basecamp API",

    defaults: { name: displayName },
    properties,

    credentials: [
      {
        name: "basecampOAuth2Api",
        required: true
      }
    ],

    requestDefaults: {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      baseURL: '={{"https://3.basecampapi.com/" + $credentials.basecampId}}',
    },

    version: 1,
    group: ["transform"],
    subtitle: '={{$parameter["operation"]}}',
    inputs: [NodeConnectionType.Main],
    outputs: [NodeConnectionType.Main]
  }
}
