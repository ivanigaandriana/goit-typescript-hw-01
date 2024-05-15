type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
  };
  
  function createOrUpdateUser(initialValues:Partial<User>) {
    // Оновлення користувача
    const user:User = {
        name :'',
        surname :'',
        email :'',
        password :''
    }
    return{
        ...user, ...initialValues};
  }
  
  createOrUpdateUser({ 
    email: 'user@mail.com', 
    password: 'password123' 
  });