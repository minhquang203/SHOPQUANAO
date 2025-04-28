SHOPQUANAO/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── database.js        # Cấu hình database
│   │   │   └── env.js            # Biến môi trường
│   │   │
│   │   ├── controllers/
│   │   │   ├── authController.js  # Xử lý auth
│   │   │   └── userController.js  # Xử lý user
│   │   │
│   │   ├── middlewares/
│   │   │   ├── auth.js           # Middleware xác thực
│   │   │   └── validator.js      # Validate dữ liệu
│   │   │
│   │   ├── models/
│   │   │   └── User.js           # Model user
│   │   │
│   │   ├── routes/
│   │   │   ├── auth.js           # Route auth 
│   │   │   └── user.js           # Route user
│   │   │
│   │   ├── utils/
│   │   │   ├── responseHandler.js # Xử lý response
│   │   │   └── errorHandler.js    # Xử lý error
│   │   │
│   │   └── app.js                # Entry point
│   │
│   ├── .env                      # Biến môi trường
│   ├── package.json
│   └── README.md
│
└── frontend/
    ├── src/
    │   ├── components/           # React components
    │   ├── pages/               # Pages components  
    │   ├── context/             # React context
    │   ├── hooks/              # Custom hooks
    │   ├── services/           # API services
    │   ├── utils/              # Helper functions
    │   └── App.js
    │
    ├── package.json
    └── README.md