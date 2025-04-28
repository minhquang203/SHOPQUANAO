const validateRegister = (req, res, next) => {
    const { fullName, email, password, confirmPassword } = req.body;
  
    if (!fullName || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
  
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match.' });
    }
  
    next();
  };
  
  export default validateRegister;
  