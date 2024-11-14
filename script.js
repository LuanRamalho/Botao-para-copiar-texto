function copy(copyId) {
  let copyText = document.getElementById(copyId).innerText;
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(copyText)
      .then(() => {
        document.getElementById("alert").style.display = "block";
        setTimeout(function () {
          document.getElementById("alert").style.display = "none";
        }, 1000);
      })
      .catch((err) => {
        console.error("Failed to copy text:", err);
      });
  } else {
    console.error("Clipboard api not supported on this browser");
  }
}
