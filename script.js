const form = document.getElementById("create-task-form");
const modal = document.getElementById("modal");
const btn = document.getElementById("createBtn");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const taskStatus = form.status.value; //"TODO" | "INPROGRESS | "DONE"

    const taskInfo = {
        title: form.title.value,
        description: form.description.value,
        developer: form.developer.value,
        estimate: form.estimate.value,
    }
    // console.log(taskStatus);

    /**
     * <div class="task-card" title="This is a dummy task">
                <h3>Chat Box</h3>
                <div>
                    <span class="badge">3 Days</span>
                    <span class="image">K</span>
                </div>
        </div>
     */

        const taskCard = document.createElement("div");
        taskCard.className = "task-card";
        taskCard.title = taskInfo.description;
        taskCard.draggable = true;
        taskCard.addEventListener("dragstart", onDragStart)

        taskCard.innerHTML = `
        <h3>${taskInfo.title}</h3>
            <div>
                <span class="badge">${taskInfo.estimate} Days</span>
                <span class="image">${taskInfo.developer[0].toUpperCase()}</span>
            </div>`;

            const taskContainer = document.getElementById(taskStatus)
            taskContainer.appendChild(taskCard);
            form.reset();

})
// function clearAllInputs(event) {
//     var allInputs = document.querySelectorAll('input');
//     allInputs.forEach(singleInput => singleInput.value = '');
//  }

function toggleModal(element){
    modal.classList.toggle("hide-modal");

    //when hide modal is present the innerText of the icon = expand_less: expand_more 

    element.innerText = modal.classList.contains("hide-modal") ? "expand_less" : "expand_more";

}

