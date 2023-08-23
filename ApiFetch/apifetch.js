function fetchAndDisplayUsers() {
    fetch('https://reqres.in/api/users?delay=3')
      .then(response => response.json())
      .then(data => {
        const usuariosBody = document.getElementById('usuariosBody');
        usuariosBody.innerHTML = ''; // Limpiar contenido existente
    
        data.data.forEach(user => {
          const row = usuariosBody.insertRow();
          row.insertCell(0).innerText = user.id;
          row.insertCell(1).innerText = user.first_name + ' ' + user.last_name;
          row.insertCell(2).innerText = user.email;
          const avatarCell = row.insertCell(3);
          const avatarImg = document.createElement('img');
          avatarImg.src = user.avatar;
          avatarImg.alt = user.first_name;
          avatarCell.appendChild(avatarImg);
        });
        
        // Almacenar en el localStorage
        localStorage.setItem('usersData', JSON.stringify(data));
        
        // Eliminar después de 1 minuto
        setTimeout(() => {
          localStorage.removeItem('usersData');
        }, 60000); // 1 minuto = 60,000 milisegundos
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  document.getElementById('cargarUsuarios').addEventListener('click', fetchAndDisplayUsers);
  
  // Intentar obtener los datos almacenados en localStorage
  const storedUsersData = localStorage.getItem('usersData');
  if (storedUsersData) {
    const parsedData = JSON.parse(storedUsersData);
    const usuariosBody = document.getElementById('usuariosBody');
    
    parsedData.data.forEach(user => {
      const row = usuariosBody.insertRow();
      row.insertCell(0).innerText = user.id;
      row.insertCell(1).innerText = user.first_name + ' ' + user.last_name;
      row.insertCell(2).innerText = user.email;
      const avatarCell = row.insertCell(3);
      const avatarImg = document.createElement('img');
      avatarImg.src = user.avatar;
      avatarImg.alt = user.first_name;
      avatarCell.appendChild(avatarImg);
    });
  }