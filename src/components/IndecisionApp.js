import React from 'react'
import ReactDOM from 'react-dom'
import AddOption from './AddOption'
import Action from './Action'
import Header from './Header'
import Options from './Options'
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component {

    state = {
        options: this.props.options,
        selectedOption: undefined
    }

    closeModal = () => {
        this.setState({
            selectedOption: undefined
        })
    }

    componentDidMount() {
        if (localStorage.getItem('options')) {
            const json = localStorage.getItem('options')
            const array = JSON.parse(json)
            this.setState(() => ({ options: array }))
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }

    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    }

    addOptionToArray = (option) => {

        if (!option) {
            return 'Enter valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Item Alredy exists'
        }


        this.setState((prevState) => ({ options: prevState.options.concat(option) }))

    }

    handlePick = () => {

        const randomIndex = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomIndex]
        this.setState({
            selectedOption: option
        })
    }

    render() {
        const subtitle = 'Put your life in the hands of an computer'

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick} />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption addOptionToArray={this.addOptionToArray} />
                <OptionModal selectedOption={this.state.selectedOption}
                 closeModal={this.closeModal}/>
            </div>
        )
    }
}


IndecisionApp.defaultProps = {
    options: []
}

export default IndecisionApp