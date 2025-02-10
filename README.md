# InventoryPro - Professional Inventory Management System

A modern, full-stack inventory management system built with React and Node.js, featuring a clean and professional interface for managing products, suppliers, and tracking inventory metrics.

![Dashboard Screenshot](screenshots/dashboard.png)

## Features

- 🔐 **Secure Authentication**
  - Username/password authentication
  - Protected routes and API endpoints
  - Session management with PostgreSQL

- 📊 **Interactive Dashboard**
  - Real-time inventory metrics
  - Low stock alerts
  - Total stock value tracking
  - Active supplier monitoring

- 📦 **Product Management**
  - Complete CRUD operations
  - SKU tracking
  - Minimum quantity alerts
  - Price management in Indian Rupees (₹)
  - Supplier association

- 🤝 **Supplier Management**
  - Supplier profile management
  - Active/Inactive status tracking
  - Contact information storage
  - Product relationship tracking

- 📈 **Reports & Analytics**
  - Stock level visualization
  - Supplier distribution charts
  - Interactive data presentation
  - Real-time updates

## Tech Stack

### Frontend
- React with TypeScript
- TanStack Query for data fetching
- Tailwind CSS for styling
- shadcn/ui components
- Recharts for data visualization
- Wouter for routing

### Backend
- Express.js server
- PostgreSQL database
- Drizzle ORM
- Passport.js authentication
- Session management
- TypeScript

## Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- Git

### Installation

1. Clone the repository
```bash
git clone https://github.com/MaheshAwasare/inventory-insight.git
cd inventory-insight
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env` file in the root directory with:
```env
DATABASE_URL=postgresql://user:password@host:port/dbname
```

4. Set up the database
```bash
npm run db:push
```

5. Start the development server
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

### Database Setup

1. Create a PostgreSQL database
2. Update the DATABASE_URL in your `.env` file
3. The schema will be automatically created when you run:
```bash
npm run db:push
```

### Monitoring

- **Application Logs**: Check the server console for API request logs and errors
- **Database**: Use the PostgreSQL admin tools to monitor database performance
- **Frontend**: Check the browser console for client-side logs and errors

## Project Structure

```
├── client/                # Frontend React application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── hooks/        # Custom React hooks
│   │   ├── lib/          # Utility functions
│   │   └── pages/        # Page components
├── server/               # Backend Express application
│   ├── auth.ts          # Authentication setup
│   ├── routes.ts        # API routes
│   └── storage.ts       # Database operations
└── shared/              # Shared TypeScript types
    └── schema.ts        # Database schema
```

## Future Features

- Advanced reporting and analytics
- Warehouse management system
- Supplier performance tracking
- External API integrations

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with [shadcn/ui](https://ui.shadcn.com/) components
- Charts powered by [Recharts](https://recharts.org/)
- Icons from [Lucide](https://lucide.dev/)
