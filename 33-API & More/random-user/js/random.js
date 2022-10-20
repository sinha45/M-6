const randomUser = () => {
    fetch('https://randomuser.me/api/?results=20')
        .then(res => res.json())
        .then(data => displayUsers(data.results))
}

const displayUsers = users => {
    const userInfo = document.getElementById('user-info');

    for (const user of users) {
        console.log(user);
        const userDiv = document.createElement('div');
        userDiv.classList.add('users')
        userDiv.innerHTML = `
                <h3>title: ${user.name.title}</h3>
                <h3>user first name: ${user.name.first}</h3>
                <h3>user last name: ${user.name.last}</h3>
                
                
        
        `;
        userInfo.appendChild(userDiv);
    }
}

randomUser();