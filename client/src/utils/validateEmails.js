//re=regular expression
const re =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default (emails) => {
  const invalidEmails = emails
    .replace(/,*$/, "") //check if emails has , at last index
    .split(",")
    .map((email) => email.trim())
    .filter((email) => re.test(email) === false);

  //console.log("_____ ", substring(invalidEmails.toString().length - 1));

  if (invalidEmails.length) {
    return `The emails are invalid: ${invalidEmails} `;
  }
  return;
};
