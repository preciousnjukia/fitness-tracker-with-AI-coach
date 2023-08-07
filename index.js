document.addEventListener('DOMContentLoaded', () => {
    // Fetch data from the JSON Server
    fetch('http://localhost:3000/exercises') 
      .then(response => response.json())
      .then(data => {
      
        const exerciseList = document.getElementById('exercise-list');
  
        if (data && data.length > 0) {
          data.forEach(exercise => {
            const exerciseCard = createExerciseCard(exercise);
            exerciseList.appendChild(exerciseCard);
          });
        } else {

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
  
      return card;
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    const profileForm = document.getElementById("profile-form");
    const progressCanvas = document.getElementById("progressCanvas");

    profileForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Fetch user input and update progress visualization
        const name = document.getElementById("name").value;
        const age = parseInt(document.getElementById("age").value);
        const fitnessGoal = document.getElementById("fitness-goal").value;

        updateProgressVisualization(name, age, fitnessGoal);
    });

    function updateProgressVisualization(name, age, fitnessGoal) {
        // Simulated progress data, you can replace this with actual data
        const progressData = [30, 40, 50, 60, 70, 80, 90, 100];

        // Assuming you use Chart.js library for visualization
        const progressChart = new Chart(progressCanvas.getContext("2d"), {
            type: "line",
            data: {
                labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8"],
                datasets: [{
                    label: `${name}'s Progress`,
                    data: progressData,
                    borderColor: "blue",
                    fill: false,
                }],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                    },
                },
            },
        });
    }
});

  