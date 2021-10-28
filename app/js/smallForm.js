const smallFormInput = (e) => {
  const input = $(e.currentTarget);
  if(input.val() === '') {
    input.parent('form').removeClass('input');
  } else {
    input.parent('form').addClass('input');
  }
}

export { smallFormInput }