import React, { Component } from 'react'

interface ButtonProps {
  text: string
  type: string | undefined
  action: Function
}

export default class ButtonClass extends Component<ButtonProps> {
  onClick() {
    this.props.action(this.props.text + '-button was clicked');
  }
  render() {
    return (
      <button 
        className={'btn text-uppercase col-12 pt-3 pb-3 btn-' + this.props.type} 
        onClick={() => this.onClick()}
      >
        {this.props.text} (0)
      </button>
    )
  }
}
