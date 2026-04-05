const container = document.getElementById('devotional-container');

fetch('devotional.json')
  .then(response => response.json())
  .then(data => renderDevotional(data));

function renderDevotional(days) {
  days.forEach(day => {
    const card = document.createElement('div');
    card.classList.add('card');

    const checked = localStorage.getItem(`day-${day.day}`) === 'true' ? 'checked' : '';

    card.innerHTML = `
      <h2>Day ${day.day}: ${day.name}</h2>
      <p><strong>Scripture:</strong> <a href="${day.scripture.link}" target="_blank">${day.scripture.reference}</a></p>
      <p><strong>Reflection:</strong> ${day.reflection}</p>
      <p><strong>Action/Prayer:</strong> ${day.action_prayer}</p>
      <p><strong>Hymn:</strong> <a href="${day.hymn.link}" target="_blank">${day.hymn.title}</a></p>
      <div class="checkbox-container">
        <input type="checkbox" id="day-${day.day}" ${checked}>
        <label for="day-${day.day}">Completed</label>
      </div>
    `;

    container.appendChild(card);

    const checkbox = card.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', () => {
      localStorage.setItem(`day-${day.day}`, checkbox.checked);
    });
  });
}