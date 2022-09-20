import { Component } from "react";

class Form extends Component {

    constructor  () {
        super();

        this.state = {
            value: '',
        }
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onChange(this.state.value)
    }
       
    onChange = (event) => {
        const {value} = event.target;
        this.setState({value}) 
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input name="balance"
                type ="number"
                placeholder="amount"
                value = {this.state.value}
                onChange={this.onChange}/>
                
                <button>Save</button>
            </form>
        )
    }
};

export default Form;