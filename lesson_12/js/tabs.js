const tabs = document.querySelectorAll('.step');
const tabs_content = document.querySelectorAll('.work_content');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const index = [...tabs].indexOf(tab);
        tabs.forEach(t => {
            t.classList.remove('step_active')
        });
        tab.classList.add('step_active');
        tabs_content.forEach(t => t.style.display = 'none');
        tabs_content[index].style.display = 'flex';
    });
});