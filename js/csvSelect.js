datasets = [
    new Dataset("Conform Exercise Norm", "csv/ConformExerciseNorm.csv", 'Conform exercise norm', 'Age'),
    new Dataset("Life Expectation", "csv/LifeExpectation.csv", 'Life expectation', 'Age'),
    new Dataset("Participates In Sports Association", "csv/ParticipatesInSportsAssociation.csv", 'Participates in sports association', 'Age'),
    new Dataset("Sports Weekly", "csv/SportsWeekly.csv", 'Sports weekly', 'Age'),
    new Dataset("Subscription To Sports", "csv/SubscriptionToSports.csv", 'Subscription to sports', 'Age'),
    new ThreeDimensionalDataSet("Work", "csv/Work.csv", 'Age', 'Satisfied with work circumstances', 'Satisfied with work'),
]

const selectFirstElement = document.querySelector("select#dataset-one");
const selectSecondElement = document.querySelector("select#dataset-two");

window.onload = function () {
    selectFirstElement.innerHTML += buildDatasetDropdownOptions();
    selectSecondElement.innerHTML += buildDatasetDropdownOptions(true);

    updateSelectChartType();
}

selectFirstElement.addEventListener('change', () => {
    selectSecondElement.innerHTML = buildDatasetDropdownOptions(true, selectFirstElement.value);
});

function buildDatasetDropdownOptions(addEmpty = false, excludeValue = null){
    let html = addEmpty ? "<option value=''>...</option>" : "";
    for (let dataset of datasets){
        if (excludeValue !== null && dataset.url === excludeValue){
            continue;
        }

        html += "<option data-set-type='"+dataset.constructor.name+"' value='" + dataset.url + "'>" + dataset.name + "</option>"
    }

    return html;
}
