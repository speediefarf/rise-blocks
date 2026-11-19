// Showcase pages: load a block's own file, show its source, wire the copy button.
// The demo iframe and the displayed code are the same file, so they can never drift apart.
(function () {
  var holder = document.querySelector("[data-block-file]");
  if (!holder) return;
  var file = holder.getAttribute("data-block-file");
  var raw = "";

  function setCopied(btn) {
    var old = btn.textContent;
    btn.textContent = "Copied ✓";
    setTimeout(function () { btn.textContent = old; }, 1600);
  }

  fetch(file)
    .then(function (r) { return r.text(); })
    .then(function (text) {
      raw = text;
      var code = document.getElementById("sourceCode");
      if (code) code.textContent = text;
    })
    .catch(function () {
      var code = document.getElementById("sourceCode");
      if (code) code.textContent = "Could not load the source here — use the Download button instead.";
    });

  document.querySelectorAll("[data-copy-block]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (!raw) return;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(raw).then(function () { setCopied(btn); });
      } else {
        var ta = document.createElement("textarea");
        ta.value = raw; document.body.appendChild(ta); ta.select();
        try { document.execCommand("copy"); setCopied(btn); } catch (e) {}
        document.body.removeChild(ta);
      }
    });
  });
})();
