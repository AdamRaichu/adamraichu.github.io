document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("report").addEventListener("click", function () {
    createPopup(`
      <h1>Report a Bad Link</h1>
      <div style="text-align: center;">
        <h3>Do you have a GitHub account?</h3>
        <button style="background-color: lawngreen;" onclick="location.href = 'https://github.com/AdamRaichu/adamraichu.github.io/issues/new?assignees=&labels=bug%2C+good+first+issue&template=bad-link.md&title=Bad+Link'">Yes</button>
        <button style="background-color: red;" onclick="location.href = 'https://forms.gle/2p2p58VhB7v2QxVR7'">No</button>
      </div >
    `);
  })
});