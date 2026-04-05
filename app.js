// Get the container where all cards will appear
const container = document.getElementById("devotional-container");

// Fetch the devotional JSON
fetch('devotional.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      // Create card
      const card = document.createElement('div');
      card.className = 'card';

      // Name
      const nameEl = document.createElement('h2');
      nameEl.textContent = item.name;
      card.appendChild(nameEl);

      // Scriptures
      const scriptureEl = document.createElement('p');
      scriptureEl.innerHTML = item.scriptures
        .map(s => `<a href="https://www.churchofjesuschrist.org/study/scriptures?lang=eng&q=${encodeURIComponent(s)}" target="_blank">${s}</a>`)
        .join(' | ');
      card.appendChild(scriptureEl);

      // Reflection
      const reflectionEl = document.createElement('p');
      reflectionEl.textContent = item.reflection;
      card.appendChild(reflectionEl);

      // Hymn
      const hymnEl = document.createElement('p');
      hymnEl.innerHTML = `<a href="https://www.churchofjesuschrist.org/music/library/hymns/${encodeURIComponent(item.hymn)}" target="_blank">${item.hymn}</a>`;
      card.appendChild(hymnEl);

      // Checkbox
      const checkboxContainer = document.createElement('div');
      checkboxContainer.className = 'checkbox-container';
      checkboxContainer.innerHTML = `<input type="checkbox" id="${item.checkboxId}"> Completed`;
      card.appendChild(checkboxContainer);

      // Add card to container
      container.appendChild(card);
    });
  })
  .catch(err => console.error("Error loading devotional JSON:", err));
