
function copyCode(btn,code){if(navigator.clipboard){navigator.clipboard.writeText(code)}btn.textContent='Copied \u2713';btn.classList.add('done');setTimeout(function(){btn.textContent='Copy';btn.classList.remove('done')},1800)}
