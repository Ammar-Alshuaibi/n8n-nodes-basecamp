# n8n Basecamp Nodes

A comprehensive n8n community node package that provides integration with Basecamp 4 API, including full support for managing todos, todo lists, projects, people, and more.

## Features

This package includes nodes for:

### ✅ Todo Management (NEW!)
- **Todo Sets**: Get todo sets for projects
- **Todo Lists**: Create, read, update todo lists
- **Todos**: Full CRUD operations for individual tasks
  - Create todos with assignees, due dates, descriptions
  - Update todo details and assignments
  - Complete/uncomplete todos
  - Reposition todos within lists

### 📊 Project Management
- Get all projects or specific projects
- Create new projects
- Manage project access and people

### 👥 People Management
- Get all people or specific person details
- Get people on projects
- Update project access permissions
- Get pingable people

### 📋 Card Tables (Kanban)
- Manage card table columns
- Create, update, and move cards
- Column color management
- Watch/unwatch columns

### 🤖 Chatbots & Integrations
- Create and manage chatbots
- Send messages via chatbots
- Webhook management

### 📁 File Management
- Upload and manage attachments
- Document management
- Vault operations

### 📅 Schedule Management
- Create and manage schedule entries
- Update schedule settings
- Get schedule information

### 🔔 Notifications & Subscriptions
- Subscribe/unsubscribe from recordings
- Manage notification preferences

## Installation

Please refer to the [n8n documentation](https://docs.n8n.io/integrations/community-nodes/installation/) for instructions on how to install this node package.

## Basecamp API Setup

### 1. Create Basecamp App

1. Go to [Basecamp Launchpad](https://launchpad.37signals.com/integrations)
2. Click "Register a new application"
3. Fill in your application details:
   - **Name**: Your application name
   - **Company**: Your company name
   - **Website**: Your website URL
   - **Redirect URI**: `http://localhost:5678/rest/oauth2-credential/callback` (adjust domain as needed)

### 2. Configure Credentials in n8n

1. In n8n, go to **Settings** → **Credentials**
2. Click **+ Add Credential**
3. Search for "Basecamp API" and select it
4. Fill in the required fields:
   - **Client ID**: From your Basecamp app
   - **Client Secret**: From your Basecamp app
   - **Basecamp ID**: Your Basecamp account ID (found in your Basecamp URL)
5. Click **Connect my account** and authorize the connection

## Usage Examples

### Create a Todo

```json
{
  "operation": "createTodo",
  "bucketId": "{{ $json.project_id }}",
  "todolistId": "{{ $json.todolist_id }}",
  "content": "Complete project documentation",
  "description": "Write comprehensive docs for the new feature",
  "due_on": "2025-08-01",
  "assignee_ids": [12345, 67890],
  "notify": true
}
```

### Get All Todos in a List

```json
{
  "operation": "getTodos",
  "bucketId": "{{ $json.project_id }}",
  "todolistId": "{{ $json.todolist_id }}",
  "status": "active",
  "completed": false
}
```

### Complete a Todo

```json
{
  "operation": "completeTodo",
  "bucketId": "{{ $json.project_id }}",
  "todoId": "{{ $json.todo_id }}"
}
```

## Troubleshooting

### Node Not Appearing

1. Check that the package is installed correctly in your n8n installation
2. Restart n8n
3. Check the n8n logs for any errors

### Authentication Issues

1. Verify your Basecamp app credentials
2. Ensure the redirect URI matches exactly
3. Check that your Basecamp account ID is correct

## Support

For issues and questions:

1. Check the [Basecamp API documentation](https://github.com/basecamp/bc3-api)
2. Review the [n8n community docs](https://docs.n8n.io/)
3. Open an issue in this repository

## Contributing

Contributions are welcome! Please read the contributing guidelines and submit pull requests for any improvements.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
