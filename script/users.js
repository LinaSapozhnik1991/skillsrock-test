async function fetchRandomUsers() {
    const userList = document.getElementById('userList');
    const loading = document.getElementById('loading');
    const errorText = document.getElementById('error'); 
    const loadingImg =document.getElementById('loading-img');
    loading.style.display = 'flex';
    loadingImg.style.display = 'flex';
    errorText.textContent = '';

    try {
        const response = await fetch('https://randomuser.me/api/1.4?results=10');
        if (!response.ok) {
            throw new Error('Сетевая ошибка: ' + response.statusText);
        }
        
        const data = await response.json();
        const users = data.results; 

    
        userList.innerHTML = '';

        users.forEach(user => {
            const li = document.createElement('li');
            li.innerHTML = `
              <img src="${user.picture.thumbnail}" alt="${user.name.first} ${user.name.last}">
              <p>${user.name.first} ${user.name.last}</p>
              <p>${user.email}</p>
            `;
            userList.appendChild(li);
        });
    } catch (error) {
        errorText.textContent = 'Не удалось загрузить пользователей: ' + error.message; 
    } finally {
        loading.style.display = 'none';
        loadingImg.style.display = 'none';
    }
}

// Запускаем функцию
fetchRandomUsers();