"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.credentials = exports.nodes = exports.BasecampApi = exports.Basecamp = void 0;
const Basecamp_node_1 = require("./nodes/Basecamp/Basecamp.node");
Object.defineProperty(exports, "Basecamp", { enumerable: true, get: function () { return Basecamp_node_1.Basecamp; } });
const BasecampApi_credentials_1 = require("./credentials/BasecampApi.credentials");
Object.defineProperty(exports, "BasecampApi", { enumerable: true, get: function () { return BasecampApi_credentials_1.BasecampApi; } });
exports.nodes = [new Basecamp_node_1.Basecamp()];
exports.credentials = [new BasecampApi_credentials_1.BasecampApi()];
//# sourceMappingURL=index.js.map