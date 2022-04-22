/*
    Created by Exerra on 23/04/2022
*/

const React = require("react")

export class Commands extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			error: null,
			isLoaded: false,
			commands: [],
			slashCommands: []
		};
	}

	componentDidMount() {
		fetch("https://api.exerra.xyz/karen/commands")
			.then(res => res.json())
			.then(result => {
				let formattedCommands = []

				formattedCommands = result.commands.sort((a, b) => a.type.localeCompare(b.type));
				for (let i = formattedCommands.length - 1; i >= 0; i--) {
					if (formattedCommands[i].type == 'Private') {
						formattedCommands.splice(i, 1)
					}
				}

				this.setState({ isLoaded: true, commands: formattedCommands, slashCommands: result.slashCommands })
			})
	}


	render() {
		return (
			<table className="sortable">
				<thead>
					<tr>
						<th>Type</th>
						<th>Name</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					{
						this.state.commands.map(command => {
							return <tr key={command.name}>
								<th>{command.type}</th>
								<th>{command.name}</th>
								<th>{command.description}</th>
							</tr>
						})
					}
				</tbody>
			</table>
		)
	}
}

export class Settings extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			error: null,
			isLoaded: false,
			settings: []
		};
	}

	componentDidMount() {
		fetch("https://api.exerra.xyz/karen/docs")
			.then(res => res.json())
			.then(result => {
				this.setState({ isLoaded: true, settings: result.settings })
			})
	}


	render() {
		return (
			<table className="sortable">
				<thead>
				<tr>
					<th>Name</th>
					<th>Description</th>
				</tr>
				</thead>
				<tbody>
				{
					this.state.settings.map(setting => {
						return <tr key={setting.name}>
							<th>{setting.name}</th>
							<th>{setting.description}</th>
						</tr>
					})
				}
				</tbody>
			</table>
		)
	}
}

export class ToDo extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			error: null,
			isLoaded: false,
			todos: []
		};
	}

	componentDidMount() {
		fetch("https://api.exerra.xyz/karen/docs")
			.then(res => res.json())
			.then(result => {
				this.setState({ isLoaded: true, todos: result.thingstodo })
			})
	}


	render() {
		return (
			<table className="sortable">
				<thead>
				<tr>
					<th>Name</th>
					<th>Description</th>
					<th>Importance</th>
					<th>Assigned person</th>
				</tr>
				</thead>
				<tbody>
				{
					this.state.todos.map(todo => {
						return <tr key={todo.name}>
							<th>{todo.name}</th>
							<th>{todo.description}</th>
							<th>{todo.importance}</th>
							<th>{todo.assigned_person !== 'None' ? <a href={`https://github.com/${todo.assigned_person}`}>@{todo.assigned_person}</a> : todo.assigned_person}</th>
						</tr>
					})
				}
				</tbody>
			</table>
		)
	}
}