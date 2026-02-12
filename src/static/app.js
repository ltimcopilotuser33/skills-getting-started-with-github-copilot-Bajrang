document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('registration-form');
    const participantsList = document.getElementById('participants-list');

    // Hide bullet points via JS in case CSS is not enough
    participantsList.style.listStyleType = 'none';
    participantsList.style.paddingLeft = '0';

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const nameInput = document.getElementById('name');
        const name = nameInput.value.trim();
        if (name) {
            addParticipant(name);
            nameInput.value = '';
        }
    });

    function addParticipant(name) {
        const li = document.createElement('li');
        li.style.display = 'flex';
        li.style.alignItems = 'center';

        const span = document.createElement('span');
        span.textContent = name;
        span.style.flexGrow = '1';

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '🗑️';
        deleteBtn.title = 'Unregister participant';
        deleteBtn.style.marginLeft = '8px';
        deleteBtn.style.background = 'none';
        deleteBtn.style.border = 'none';
        deleteBtn.style.cursor = 'pointer';
        deleteBtn.style.fontSize = '1em';

        deleteBtn.addEventListener('click', function() {
            participantsList.removeChild(li);
        });

        li.appendChild(span);
        li.appendChild(deleteBtn);
        participantsList.appendChild(li);
    }
});
});
