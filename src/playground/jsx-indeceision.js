//babel command: 

//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --wath

// JSX -JavaScript XML

const appRoot = document.getElementById('app')
const app = {
    title: 'Indecision applikasjon',
    subtitle: 'put your life in the hands of a computer',
    options: []
}

const renderApplication = () => {

    const template = <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>} {/* if left operand is true, then right operand is displayed(if(x) then y)*/}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>{/* if(x) then y else z */}
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do?</button>
        <button onClick={removeAll}>Remove All</button>


        <ol>
        {app.options.map((element) => <li key={element}>{element}</li>)}
        </ol>


        <form onSubmit={onFormSubmit}>
            <input type="text" name="option" />
            <button>Add Option</button>
        </form>
    </div>

    ReactDOM.render(template, appRoot)

}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value

    if (option) {
        app.options.push(option)
        e.target.elements.option.value = ''
        renderApplication()
    }
}


const removeAll = () => {
    app.options = []
    renderApplication()
}


const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option)
}



renderApplication();
