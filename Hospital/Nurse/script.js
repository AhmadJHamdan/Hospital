const btn1 = document.querySelector("#psubmit");
const container = document.getElementsByClassName("patients");

function createImage(num, status) {
  const box = document.createElement("table");
  const rows = document.createElement("tr");
  rows.innerHTML = `<td class="pinfo"><img src="imageholder.webp" 
                    alt="patient image" />
                    <span class="keeptogether">Patient ${num}</span>
                    </td>`;
  rows.innerHTML += `<td class="status notready">${status}</td>`;
  box.appendChild(rows);
  container[0].appendChild(box);

  box.addEventListener("click", function () {
    const st_span = box.querySelector(".status");

    if (st_span.innerText === "Not Ready") {
      st_span.classList.remove("notready");
      st_span.classList.add("ready");
      st_span.innerText = `Ready @ ${new Date().toTimeString()}`;
    } else {
      st_span.classList.remove("ready");
      st_span.classList.add("notready");
      st_span.innerText = "Not Ready";
    }
  });

  box.addEventListener("mouseover", function () {
    box.style.backgroundColor = "gray";
  });

  box.addEventListener("mouseout", function () {
    box.style.backgroundColor = "aliceblue";
    // infoPart[0].style.backgroundColor = "cadetblue";
  });
}

btn1.addEventListener("click", function () {
  const numberHolder = document.querySelector("#numph");
  const numberOfImages = numberHolder.valueAsNumber;
  container[0].innerHTML = "";
  let status = "Not Ready";
  for (let i = 1; i <= numberOfImages; i++) {
    createImage(i, status);
  }
});
