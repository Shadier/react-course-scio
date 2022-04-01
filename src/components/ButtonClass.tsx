import React, { Component } from 'react'

interface ButtonProps {
  text: string
  type: string | undefined
  action: Function
}

interface ButtonState {
  counter: number
  isDangerous: boolean
}

export default class ButtonClass extends Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps) {
    super(props);
    this.state = {
      counter: 0,
      isDangerous: this.props.type === 'danger',
    }
  }
  onClick() {
    this.props.action(this.props.text + '-button was clicked');
    this.setState({ counter: this.state.counter + 1})
  }
  static getDerivedStateFromProps(props: ButtonProps, state: ButtonState) {
    return {
      ...state,
      isDangerous: props.type === 'danger',
    }
  }
  render() {
    return (
      <button 
        className={'btn text-uppercase col-12 pt-3 pb-3 btn-' + this.props.type} 
        onClick={() => this.onClick()}
      >
        class {this.props.text} ({this.state.counter}) {this.state.isDangerous ? 'DANGER!!' : ''}
      </button>
    )
  }
}
