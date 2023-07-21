export const getAllUsers = async () =>{
  try {
    const response = await fetch('http://localhost:3001/api/users');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Erreur lors de la requête :', error);
  }
}

export const postUser = async (userData) => {
  try {
    const response = await fetch('http://localhost:3001/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Erreur lors de la requête :', error);
    throw error;
  }
};

export const login = async (firstname, password) => {
  try {
    const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstname, password }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Erreur lors de la requête :', error);
    throw error;
  }
};

export const createEvent = async (userData) => {
  try {
    const response = await fetch('http://localhost:3001/api/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Erreur lors de la requête :', error);
    throw error;
  }
};

export const getAllEvents = async () =>{
  try {
    const response = await fetch('http://localhost:3001/api/events');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Erreur lors de la requête :', error);
  }
}