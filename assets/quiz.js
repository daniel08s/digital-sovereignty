/* Reusable retrieval-practice quiz widget for the Digital Sovereignty course.
   Every lesson links this file and uses the markup below. Feedback is
   immediate and automatic (the tight loop that builds storage strength).

   On each page load, option buttons are shuffled (Fisher–Yates) so the
   correct answer is not in a fixed position. Authors can write options in
   any order; do not rely on HTML order for difficulty.

   Markup contract:
   <div class="q" data-correctmsg="..." data-wrongmsg="...">
     <p class="q-stem">Question text?</p>
     <button class="opt" data-correct="true">Right answer</button>
     <button class="opt">Wrong answer</button>
     ...
     <p class="q-feedback" aria-live="polite"></p>
   </div>
*/
(function () {
  function shuffle(nodes) {
    var arr = Array.prototype.slice.call(nodes);
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
    return arr;
  }

  function shuffleOptions(q) {
    var feedback = q.querySelector(".q-feedback");
    var opts = q.querySelectorAll("button.opt");
    if (opts.length < 2) return;
    shuffle(opts).forEach(function (btn) {
      if (feedback) {
        q.insertBefore(btn, feedback);
      } else {
        q.appendChild(btn);
      }
    });
  }

  function initQuiz(q) {
    shuffleOptions(q);
    var feedback = q.querySelector(".q-feedback");
    var opts = q.querySelectorAll("button.opt");
    opts.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var isCorrect = btn.dataset.correct === "true";
        opts.forEach(function (b) {
          b.disabled = true;
          if (b.dataset.correct === "true") b.classList.add("right");
        });
        if (!isCorrect) btn.classList.add("wrong");
        if (feedback) {
          feedback.textContent = isCorrect
            ? (q.dataset.correctmsg || "Correct.")
            : (q.dataset.wrongmsg || "Not quite \u2014 the right answer is highlighted.");
          feedback.classList.add("show", isCorrect ? "ok" : "no");
        }
      });
    });
  }
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".q").forEach(initQuiz);
  });
})();
