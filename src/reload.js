const refresh = document.querySelector('.refresh');
const reload = () => {
  refresh.addEventListener('click', () => {
    window.location.reload();
  });
};

export default reload;