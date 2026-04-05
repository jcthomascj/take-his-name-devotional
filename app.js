// app.js

// Load your devotional JSON (replace 'devotional.json' with your actual JSON path if different)
fetch('devotional.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('devotional-container');

    data.forEach(item => {
      // Create card element
      const card = document.createElement('div');
      card.classList.add('card');

      // Title
      const title = document.createElement('h2');
      title.textContent = item.name;
      card.appendChild(title);

      // Scriptures
      const scriptures = document.createElement('p');
      scriptures.innerHTML = `<strong>Scriptures:</strong> ${item.scriptures.join(', ')}`;
      card.appendChild(scriptures);

      // Reflection
      const reflection = document.createElement('p');
      reflection.textContent = item.reflection;
      card.appendChild(reflection);

      // Hymn
      const hymn = document.createElement('p');
      if (item.hymnNumber) {
        hymn.innerHTML = `<strong>Hymn:</strong> <a href="https://www.churchofjesuschrist.org/music/library/hymns/${item.hymnNumber}" target="_blank">${item.hymn}</a>`;
      } else {
        hymn.innerHTML = `<strong>Hymn:</strong> ${item.hymn}`;
      }
      card.appendChild(hymn);

      // Checkbox
      const checkboxLabel = document.createElement('label');
      checkboxLabel.innerHTML = `<input type="checkbox" id="${item.checkboxId}"> Completed`;
      card.appendChild(checkboxLabel);

      // Append card to container
      container.appendChild(card);
    });
  })
  .catch(error => console.error('Error loading devotional JSON:', error));
