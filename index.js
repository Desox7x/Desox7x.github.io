
function val() {

    const stateOption = document.getElementById("state").value;


  (async () => {
    const url =
      "https://parseapi.back4app.com/classes/Usabystate_" +
      stateOption +
      "?&keys=name";
    const response = await fetch(url, {
      headers: {
        "X-Parse-Application-Id": "4rN8qhOFKzQTnO1kOYar42acWUH5hPF9LdBYIGbK", // This is your app's application id
        "X-Parse-REST-API-Key": "Tcxg3oxHJuEf3BGWOlmiQpSAPRX4bdn3RXqBpNbe", // This is your app's REST API key
      },
    });

    let dataPrev = await response.json(); // Here you have the data that you need

    const dataString = JSON.stringify(dataPrev, null, 2);
    dataPrev = JSON.parse(dataString);

    const data = Object.values(dataPrev);
    console.log(data);

    try {
      console.log(data[0][1].name);
    } catch (error) {}
    // console.log(data);

    let ele = document.getElementById("city");

    let option;

    while (ele.firstChild) {
        ele.firstChild.remove()
    }

    console.log(data);
    for (let i = 0; i < data[0].length; i++) {
      option = document.createElement("option");
      option.value = data[0][i].name;
      option.text = data[0][i].name;
       
      console.log(data[0][i].name);
      ele.add(option);
    }
  })();
}

//