# Admin Panel Setup Guide

## Current Status

✅ **Admin Panel**: Running on http://localhost:3000
✅ **Backend API**: Running on http://localhost:5000
⚠️ **MongoDB**: Not connected (needs to be installed and started)

## Quick Start (Without MongoDB)

The admin panel and backend are currently running, but you'll need MongoDB to actually use the application.

## MongoDB Setup

### Option 1: Install MongoDB Locally

1. **Download MongoDB Community Server**:
   - Visit: https://www.mongodb.com/try/download/community
   - Download the Windows installer
   - Run the installer and follow the setup wizard

2. **Start MongoDB**:
   ```powershell
   # MongoDB should start automatically as a Windows service
   # Or start it manually:
   net start MongoDB
   ```

3. **Seed the Admin User**:
   ```powershell
   cd e:\shadi\wedding-\Backend
   npm run seed
   ```

### Option 2: Use MongoDB Atlas (Cloud)

1. **Create a free account** at https://www.mongodb.com/cloud/atlas
2. **Create a cluster** (free tier available)
3. **Get your connection string**
4. **Update `.env` file** in the Backend folder:
   ```
   MONGODB_URI=your-mongodb-atlas-connection-string
   ```
5. **Restart the backend** (it will auto-restart with nodemon)
6. **Seed the admin user**:
   ```powershell
   npm run seed
   ```

## Default Admin Credentials

- **Email**: admin@wedding.com
- **Password**: Admin@123

## Accessing the Admin Panel

1. Open your browser and go to: http://localhost:3000
2. You'll be redirected to the login page
3. Enter the admin credentials
4. You'll see the dashboard with user and template statistics

## Project Structure

```
wedding-/
├── admin-panel/          # Next.js admin panel (Port 3000)
│   ├── app/             # Pages and layouts
│   ├── components/      # React components
│   ├── contexts/        # Auth context
│   └── lib/             # API client
│
└── Backend/             # Express API server (Port 5000)
    ├── controllers/     # Route controllers
    ├── models/          # MongoDB models
    ├── routes/          # API routes
    └── middleware/      # Auth middleware
```

## Available Features

### Dashboard
- View total users and active users
- View total templates and active templates
- Quick access to user and template management
- System status overview

### Users Management
- View all users with pagination
- Edit user details
- Delete users
- View user statistics

### Templates Management
- View all templates
- Create new templates
- Edit existing templates
- Delete templates
- View template statistics

## Troubleshooting

### MongoDB Connection Issues

If you see "Server will continue without database connection..." in the backend terminal:

1. Make sure MongoDB is installed and running
2. Check the `MONGODB_URI` in your `.env` file
3. For local MongoDB, use: `mongodb://localhost:27017/wedding-invitations`
4. For MongoDB Atlas, use the connection string from your cluster

### Admin Panel Not Loading

1. Make sure both backend and admin panel are running
2. Check that ports 3000 and 5000 are not being used by other applications
3. Clear your browser cache and try again

### Login Issues

1. Make sure MongoDB is connected
2. Run the seed script to create the admin user: `npm run seed`
3. Use the correct credentials (see above)

## Next Steps

1. **Install MongoDB** (if not already installed)
2. **Run the seed script** to create the admin user
3. **Login to the admin panel**
4. **Start managing users and templates**

## Support

If you encounter any issues, check:
- Backend terminal for API errors
- Admin panel terminal for frontend errors
- Browser console for client-side errors
