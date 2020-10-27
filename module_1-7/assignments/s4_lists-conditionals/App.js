import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
	state = {
		userInput: '',
	};

	inputChangedHandler = (event) => {
		this.setState({
			userInput: event.target.value,
		});
	};

	deleteCharHandler = (index) => {
		const text = this.state.userInput.split('');
		text.splice(index, 1);
		const updatedText = text.join('');
		this.setState({ userInput: updatedText });
	};

	render() {
		const charList = this.state.userInput.split('').map((ch, index) => {
			return (
				<Char
					character={ch}
					key={index}
					clicked={() => this.deleteCharHandler(index)}
				/>
			);
		});

		return (
			<div className="App">
				<input
					type="text"
					onChange={(event) => this.inputChangedHandler(event)}
					value={this.state.userInput}
				></input>
				<Validation inputLength={this.state.userInput.length} />
				{charList}
				{/* <Char /> */}
				<ol>
					{/* <li>
						Create an input field (in App component) with a change
						listener which outputs the length of the entered text
						below it (e.g. in a paragraph).
					</li> */}
					{/* <li>
						Create a new component (=> Validation) which
						receives the text length as a prop
					</li>
					<li>
						Inside the Validation, either output "Text too
						short" or "Text long enough" depending on the text
						length (e.g. take 5 as a minimum length)
					</li> */}
					<li>
						Create another component (=> Char) and style it as an
						inline box (=> display: inline-block, padding: 16px,
						text-align: center, margin: 16px, border: 1px solid
						black).
					</li>
					<li>
						Render a list of Chars where each Char receives a
						different letter of the entered text (in the initial
						input field) as a prop.
					</li>
					<li>
						When you click a Char, it should be removed from the
						entered text.
					</li>
				</ol>
				<p>
					Hint: Keep in mind that JavaScript strings are basically
					arrays!
				</p>
			</div>
		);
	}
}

export default App;
