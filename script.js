//your code here!
const infiList = document.getElementById("infi-list");
let itemCount = 10;

function addListItems(count) {
  for (let i = 0; i < count; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `Item ${itemCount + 1}`;
    infiList.appendChild(listItem);
    itemCount++;
  }
}

addListItems(10);

infiList.addEventListener("scroll", () => {
  if (infiList.scrollTop + infiList.clientHeight >= infiList.scrollHeight) {

    addListItems(2);
  }
});

