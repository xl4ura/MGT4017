// MirrorMe Beauty — interactive features

const beautyTips = {
  "Natural and glowing": "Try a light base, cream blush, mascara and a soft lip gloss.",
  "Soft glam": "Try warm neutral eyeshadow, defined lashes, blush and a nude lip.",
  "Full glam": "Experiment with a defined eye look, fuller coverage and a bold lip.",
  "Minimal everyday makeup": "Try concealer, brushed brows, mascara and tinted lip balm."
};

const findLookButton = document.getElementById("find-look-button");

findLookButton.addEventListener("click", () => {
  const style = document.getElementById("style").value;
  const budget = document.getElementById("budget").value;
  const result = document.getElementById("result");

  result.replaceChildren();

  const heading = document.createElement("strong");
  heading.textContent = `Your suggested look: ${style}`;

  const tip = document.createElement("p");
  tip.textContent = beautyTips[style];

  const budgetText = document.createElement("p");
  budgetText.textContent = `We'll keep your suggested budget in mind: ${budget}.`;

  result.append(heading, tip, budgetText);
  result.hidden = false;
});

document.getElementById("suggest-button").addEventListener("click", () => {
  const value = document.getElementById("owned").value.trim();
  const result = document.getElementById("owned-result");

  result.replaceChildren();

  const message = document.createElement("p");

  if (!value) {
    message.textContent = "Add a few products from your makeup bag first.";
  } else {
    const heading = document.createElement("strong");
    heading.textContent = "Your collection: ";

    const products = document.createElement("span");
    products.textContent = value;

    const tip = document.createElement("p");
    tip.textContent = "Try combining your existing products in a new way. Experiment with different colour combinations and save the look you like!";

    message.append(heading, products);
    result.append(message, tip);
    result.hidden = false;
    return;
  }

  result.append(message);
  result.hidden = false;
});
