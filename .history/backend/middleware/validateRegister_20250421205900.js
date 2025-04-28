const validateRegister = (req, res, next) => {
    const { fullName, email, password, confirmPassword } = req.body;
  
    // Check if all fields exist
    if (!fullName || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
  
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format.' });
    }
  
    // Validate fullName length
    if (fullName.length < 2 || fullName.length > 50) {
      return res.status(400).json({ 
        message: 'Full name must be between 2 and 50 characters.' 
      });
    }
  
    // Validate password strength
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({ 
        message: 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.'
      });
    }
  
    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match.' });
    }
  
    next();
  };
  
  // Change export to CommonJS syntax
  module.exports = validateRegister;