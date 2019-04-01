document.addEventListener('DOMContentLoaded', function () {
  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var elems = document.querySelectorAll(".tooltipped");
  M.Tooltip.init(elems);
})