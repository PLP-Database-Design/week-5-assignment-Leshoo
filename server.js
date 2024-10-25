const express = require('express')
const app = express()

// Question 1 goes here
app.get('/patients', (req, res) => {
  const patientData = patients.map(patient => {
    return {
      patient_id: patient.patient_id,
      first_name: patient.first_name,
      last_name: patient.last_name,
      date_of_birth: patient.date_of_birth
    };
  });
  res.json(patientData);
});

// Question 2 goes here
app.get('/providers', (req, res) => {
  const providerData = providers.map(provider => {
    return {
      first_name: provider.first_name,
      last_name: provider.last_name,
      provider_specialty: provider.provider_specialty
    };
  });
  res.json(providerData);
});

// Question 3 goes here
app.get('/patients/:first_name', (req, res) => {
  const { first_name } = req.params;
  const matchingPatients = patients.filter(patient => patient.first_name.toLowerCase() === first_name.toLowerCase());
  
  if (matchingPatients.length > 0) {
    res.json(matchingPatients);
  } else {
    res.status(404).json({ message: 'No patients found with that first name.' });
  }
});

// Question 4 goes here
app.get('/providers/specialty/:provider_specialty', (req, res) => {
  const { provider_specialty } = req.params;
  const matchingProviders = providers.filter(provider => provider.provider_specialty.toLowerCase() === provider_specialty.toLowerCase());

  if (matchingProviders.length > 0) {
    res.json(matchingProviders);
  } else {
    res.status(404).json({ message: 'No providers found with that specialty.' });
  }
});

// listen to the server
const PORT = 3000
app.listen(PORT, () => {
  console.log(`server is runnig on http://localhost:${PORT}`)
})
