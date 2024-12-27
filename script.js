const templates = [
    { name: "Skematik Zona Bisnis Cabang Paseh", id: "ZonaBisnis" },
    { name: "Skematik Zona Produksi Cabang Paseh", id: "ZonaProduksi" },
    { name: "Data Zona Bisnis", id: "DataZonaBisnis" },
    { name: "GIS", id: "GIS" },
    
    // Add more templates as needed
];

function displayTemplates() {
    const templateList = document.getElementById('templateList');
    templateList.innerHTML = ''; // Clear existing templates

    templates.forEach(template => {
        const templateItem = document.createElement('div');
        templateItem.className = 'template-item';
        templateItem.innerHTML = `<h3>${template.name}</h3><button onclick="openTemplate('${template.id}')">View</button>`;
        templateList.appendChild(templateItem);
    });
}

function openTemplate(templateId) {
    // Navigate to the corresponding page based on the templateId
    if (templateId === 'ZonaBisnis') {
        window.location.href = 'zona_bisnis.html'; // Ensure this file exists in the correct location
    } else if (templateId === 'DataZonaBisnis') {
        alert("Data Zona Bisnis page is under construction.");
    } else if (templateId === 'GIS') {
        alert("GIS page is under construction.");
    } else {
        alert(`No page available for: ${templateId}`);
    }
}

// Initial display of templates
displayTemplates();

// Search functionality
document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const filteredTemplates = templates.filter(template => template.name.toLowerCase().includes(query));
    
    const templateList = document.getElementById('templateList');
    templateList.innerHTML = ''; // Clear existing templates
    
    filteredTemplates.forEach(template => {
        const templateItem = document.createElement('div');
        templateItem.className = 'template-item';
        templateItem.innerHTML = `<h3>${template.name}</h3><button onclick="openTemplate('${template.id}')">View</button>`;
        templateList.appendChild(templateItem);
    });
});
