// Sample resource data
var resourcesData = [
    {
      title: "Breast Cancer Basics",
      description: "Learn the fundamentals of breast cancer and its risk factors.",
      link: "https://www.cdc.gov/cancer/breast/basic_info/index.htm"
    },
    {
      title: "Breast Cancer Screening",
      description: "Find out about different breast cancer screening methods and their importance.",
      link: "https://www.cancer.gov/types/breast/patient/breast-screening-pdq"
    },
    {
      title: "Breast Cancer Treatment Options",
      description: "Explore the various treatment options available for breast cancer patients.",
      link: "https://www.cancer.net/cancer-types/breast-cancer/types-treatment"
    }
  ];
  
  // Function to create resource elements
  function createResourceElement(resource) {
    var resourceElement = document.createElement("div");
    resourceElement.className = "resource";
  
    var titleElement = document.createElement("h2");
    titleElement.textContent = resource.title;
  
    var descriptionElement = document.createElement("p");
    descriptionElement.textContent = resource.description;
  
    var linkElement = document.createElement("a");
    linkElement.href = resource.link;
    linkElement.textContent = "Read More";
  
    resourceElement.appendChild(titleElement);
    resourceElement.appendChild(descriptionElement);
    resourceElement.appendChild(linkElement);
  
    return resourceElement;
  }
  
  // Function to populate the resources section
  function populateResources() {
    var resourcesContainer = document.getElementById("resources");
  
    resourcesData.forEach(function(resource) {
      var resourceElement = createResourceElement(resource);
      resourcesContainer.appendChild(resourceElement);
    });
  }
  
  // Call the function to populate resources on page load
  window.addEventListener("load", populateResources);
  