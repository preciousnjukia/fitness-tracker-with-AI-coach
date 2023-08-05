document.addEventListener('DOMContentLoaded', () => {
    // Fetch data from the JSON Server
    fetch('http://localhost:3000/exercises') // Update the URL with your JSON Server URL
      .then(response => response.json())
      .then(data => {
        // Process the data and update the UI
        const exerciseList = document.getElementById('exercise-list');
  
        // Check if the data contains exercises
        if (data && data.length > 0) {
          data.forEach(exercise => {
            const exerciseCard = createExerciseCard(exercise);
            exerciseList.appendChild(exerciseCard);
          });
        } else {
          // Handle the case when there are no exercises
          exerciseList.innerHTML = '<p>No exercises found.</p>';
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  
    // Function to create exercise cards
    function createExerciseCard(exercise) {
      const card = document.createElement('div');
      card.classList.add('exercise-card');
  
      const name = document.createElement('h2');
      name.textContent = exercise.name;
      card.appendChild(name);
  
      const description = document.createElement('p');
      description.textContent = exercise.description;
      card.appendChild(description);
  
      const likeButton = document.createElement('button');
      likeButton.textContent = 'Like';
      likeButton.addEventListener('click', () => {
        // Update the "likes" count (this is just an example, won't persist after page reload)
        exercise.likes = (exercise.likes || 0) + 1;
        // Update the UI with the new "likes" count
        updateLikesCount(card, exercise.likes);
      });
      card.appendChild(likeButton);
  
      const likesCount = document.createElement('span');
      likesCount.textContent = exercise.likes || 0;
      card.appendChild(likesCount);
  
      return card;
    }
  
    // Function to update the "likes" count on the UI
    function updateLikesCount(card, likes) {
      const likesCount = card.querySelector('span');
      likesCount.textContent = likes;
    }
  });
  