/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 
// Function for programming languages
function showDescription(skill, side) {
    // Left column changes
    if (side === 'left') {
        // Hide all left column descriptions
        let leftDescriptions = document.querySelectorAll('.skill-description-left');
        leftDescriptions.forEach(function(desc) {
            desc.style.display = 'none';
        });
        
        // Update the left column's heading and description based on the clicked skill
        let nameLeft = document.getElementById('skill-name-left');
        let descriptionLeft = document.getElementById('skill-description-left');

        if (skill === 'python') {
            nameLeft.textContent = 'Python';
            descriptionLeft.textContent = 'Used for data analysis and visualization in different projects. Developed scripts for geospatial data processing.';
        } else if (skill === 'r') {
            nameLeft.textContent = 'R';
            descriptionLeft.textContent = 'Processed for simple visualization of vector and raster data (the sf and stars packages, respectively). Performed common data transformation operations using functions from those packages. Created static maps (with ggplot2) and interactive maps (with mapview).';
        } else if (skill === 'javascript') {
            nameLeft.textContent = 'JavaScript';
            descriptionLeft.textContent = 'Built dynamic web applications using JavaScript and reactJS framework.Developed interactive widgets for data visualization and user engagement, enhancing the accessibility of spatial analysis results.';
        } else if (skill === 'postgresql') {
            nameLeft.textContent = 'PostgreSQL';
            descriptionLeft.textContent = 'Used for performing spatial operations, store data, geometries, and built spatial indexes.';
        }
    }

    // Right column changes
    if (side === 'right') {
        // Hide all right column descriptions
        let rightDescriptions = document.querySelectorAll('.skill-description-right');
        rightDescriptions.forEach(function(desc) {
            desc.style.display = 'none';
        });
        
        // Update the right column's heading and description based on the clicked skill
        let nameRight = document.getElementById('skill-name-right');
        let descriptionRight = document.getElementById('skill-description-right');

        if (skill === 'qgis') {
            nameRight.textContent = 'QGIS';
            descriptionRight.textContent = 'Processed and visualized geospatial datasets for environmental monitoring. Created custom map layers for project presentations. Performed geostatistical analyses and exported professional-grade maps.';
        } else if (skill === 'arcgis') {
            nameRight.textContent = 'ArcGIS Pro';
            descriptionRight.textContent = 'Utilized for geospatial data analysis, mapping, and visualization in environmental and hydrology projects.Created and managed detailed map layouts, including spatial data layers, symbology, and annotations.Performed geoprocessing tasks such as spatial joins, interpolation, buffer analysis, and terrain modeling.Delimited hydrological basins using digital elevation models (DEMs) and hydrology tools for watershed analysis.';
        } else if (skill === 'earthengine') {
            nameRight.textContent = 'Google Earth Engine';
            descriptionRight.textContent = 'Developed scripts to analyze environmental changes, such as land cover classification and vegetation monitoring, using JavaScript and Python APIs.Developed interactive widgets for data visualization and user engagement, enhancing the accessibility of spatial analysis results.';
        } else if (skill === 'erdas') {
            nameRight.textContent = 'Erdas Imagine';
            descriptionRight.textContent = 'Utilized ENVI for RS add analysis, image classification, and geospatial data processing. Experienced in satellite image interpretation, land use/land cover mapping, and raster data analysis to support GIS-based decision-making.';
        }
    }
}





    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

