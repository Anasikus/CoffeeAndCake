function showSection(sectionId) {
    var sections = document.querySelectorAll('#MP_Coffee, #MP, #MP_Deserts');
    sections.forEach(function(section) {
        if (section.id === sectionId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

// Показываем фирменное комбо по умолчанию
showSection('MP');