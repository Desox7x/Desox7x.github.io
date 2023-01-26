// This function gets the value of the selected state and calls the fetchData function
function valueChange() {
  const stateOption = document.getElementById("state").value;
  fetchData(stateOption);
}

// This function fetches data from the API URL and calls the handleData function
async function fetchData(stateOption) {
  const url = `https://parseapi.back4app.com/classes/Usabystate_${stateOption}?&keys=name`;
  const headers = {
    "X-Parse-Application-Id": "4rN8qhOFKzQTnO1kOYar42acWUH5hPF9LdBYIGbK",
    "X-Parse-REST-API-Key": "Tcxg3oxHJuEf3BGWOlmiQpSAPRX4bdn3RXqBpNbe",
  };
  const response = await fetch(url, { headers });
  const dataPrev = await response.json();
  const data = Object.values(dataPrev);
  handleData(data);
}

// This function handle the data received and update the city field options
function handleData(data) {
  const ele = document.getElementById("city");
  while (ele.firstChild) {
    ele.firstChild.remove();
  }
  for (let i = 0; i < data[0].length; i++) {
    const option = document.createElement("option");
    option.value = data[0][i].name;
    option.text = data[0][i].name;
    ele.add(option);
  }
}

