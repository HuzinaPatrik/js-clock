let newText;

window.addEventListener('load',
    (event) => {
        const text = getCurrentDate();
        document.getElementById('time').innerHTML = text;

        setInterval(getCurrentDate, 1000, true)
    }
)

function getCurrentDate(update) {
    let date = new Date();
    let dateValues = [date.getHours(), date.getMinutes(), date.getSeconds()]

    for (let i=0; i<dateValues.length; i++) {
        if (dateValues[i] < 10) {
            dateValues[i] = "0" + dateValues[i];
        }
    }

    let text = dateValues[0] + ":" + dateValues[1] + ":" + dateValues[2];

    if (update) {
        const oldText = document.getElementById('time').innerHTML;

        document.getElementById('time').style.opacity = "0";
        //document.getElementById('time').innerHTML = text;

        newText = document.createElement('p');
        document.getElementById('box').appendChild(newText);
        newText.setAttribute('id', 'temporaryText')
        newText.innerHTML = oldText;
        newText.style.opacity = "1";
        newText.style.transform = "translateY(-50%)";

        setTimeout(() => {
            newText.style.opacity = "0";
            newText.style.transform = "translateY(-200%)";

            setTimeout(() => {
                newText.remove()

                newText = document.createElement('p');
                document.getElementById('box').appendChild(newText);
                newText.setAttribute('id', 'temporaryText')
                newText.innerHTML = text;
                newText.style.opacity = "0";
                newText.style.transform = "translateY(+150%)";

                document.getElementById('time').innerHTML = text;

                setTimeout(() => {
                    newText.style.opacity = "1";
                    newText.style.transform = "translateY(-50%)";

                    setTimeout(() => {
                        document.getElementById('time').style.opacity = "1";
                        newText.remove();
                    }, 200)
                }, 10)
            }, 200)
        }, 10)

    }
    
    return text
}