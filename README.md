# n8n-nodes-basecamp

This is an n8n community node for Basecamp 3 API integration. It provides comprehensive support for Basecamp's API endpoints, including projects, todo lists, messages, and more.

## Prerequisites

- [n8n](https://n8n.io/) (version 0.125.0 or later)
- Basecamp 3 account with API access
- Node.js (version 14 or later)
- npm (version 6 or later)

## Installation

### Community Nodes (Recommended Setup)

For production environments, install this package through n8n's Community Nodes feature:

1. Go to **Settings > Community Nodes**
2. Select **Install**
3. Enter `n8n-nodes-basecamp` in the input field
4. Click on the **Install** button

### Manual Installation

For development or testing, install the package manually:

```bash
npm install n8n-nodes-basecamp
```

Or add to your n8n installation:

```bash
cd /path/to/n8n
npm install n8n-nodes-basecamp
```

## Configuration

### Basecamp OAuth2 Setup

1. Go to [Basecamp's Integration Page](https://launchpad.37signals.com/integrations)
2. Create a new OAuth2 application
3. Set the redirect URI to your n8n installation's OAuth callback URL:
   - Format: `https://YOUR_N8N_DOMAIN/rest/oauth2-credential/callback`
4. Save the Client ID and Client Secret

### Node Configuration

1. In n8n, create a new credential of type **Basecamp API**
2. Enter your OAuth2 credentials (Client ID and Client Secret)
3. Complete the OAuth2 authentication flow

## Usage

The node supports the following Basecamp resources:

### Projects
- Create new projects
- Get project details
- List all projects

### Todo Lists
- Create todo lists
- Get todo list details
- List todo lists in a project

### Todos
- Create todos
- Update todo status
- Delete todos

### Messages
- Create messages
- Get message details
- List messages in a project

## Development

### Build

```bash
# Install dependencies
npm install

# Build the package
npm run build
```

### Testing

```bash
# Run linting
npm run lint

# Format code
npm run format
```

### Publishing

1. Update version in `package.json`
2. Build the package: `npm run build`
3. Login to npm: `npm login`
4. Publish: `npm publish`

## Support

For issues and feature requests, please [create an issue](https://github.com/yourusername/n8n-nodes-basecamp/issues) on GitHub.

## License

MIT