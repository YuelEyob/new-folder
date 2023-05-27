// Fetch the JSON data
fetch('jobs-data.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('featured-jobs');
    const filterBtn = document.getElementById('filter-btn');

    // Function to filter jobs based on keyword and location
    const filterJobs = () => {
      // Get the keyword and location input values
      const keyword = document.getElementById('keyword-input').value.toLowerCase();
      const location = document.getElementById('location-input').value.toLowerCase();

      // Clear the previous job listings
      container.innerHTML = '';

      // Filter the jobs based on the keyword and location
      const filteredJobs = data.jobs.filter(job => {
        const jobTitle = job.title.toLowerCase();
        const jobLocation = job.location.toLowerCase();

        return jobTitle.includes(keyword) && jobLocation.includes(location);
      });

      // Display the filtered jobs
      filteredJobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');

        const title = document.createElement('h3');
        title.textContent = job.title;
        jobCard.appendChild(title);

        const jobLocation = document.createElement('p');
        jobLocation.textContent = 'Location: ' + job.location;
        jobCard.appendChild(jobLocation);

        const description = document.createElement('p');
        description.textContent = 'Description: ' + job.description;
        jobCard.appendChild(description);

        const applyLink = document.createElement('a');
        applyLink.href = job.applyLink;
        applyLink.classList.add('apply-btn');
        applyLink.textContent = 'Apply Now';
        jobCard.appendChild(applyLink);

        container.appendChild(jobCard);
      });
    };

    // Add event listener to the filter button
    filterBtn.addEventListener('click', filterJobs);
  })
  .catch(error => {
    console.log('Error:', error);
  });
