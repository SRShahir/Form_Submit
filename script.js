function submitToFirebase() {
    let x = {
        title: document.getElementById("formTitle").value,
        description: document.getElementById("desc").value,
        date: document.getElementById("date").value
    }
    console.log(x);
    return false;
}