import React, { Component } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2'
import './Contact.scss'

export default class Contact extends Component {
  state = {
    name: '',
    email: '',
    msg: ''
  }

  handleChange = (prop, val) => {
    this.setState({
      [prop]: val
    })
  }

  handleSubmit = async () => {
    console.log('handlesubmit being run')
    const { name, email, msg: message } = this.state
    let res = await axios.post('/send', { name, email, message })
    console.log(res)
    this.setState({
      name: '',
      email: '',
      msg: ''
    })
    Swal.fire(res.data.message)
  }


  render() {
    const { name, email, msg } = this.state
    // let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        {/* <div className="row section-head">
          <div className="ten columns">
          <h2>Contact</h2>
            <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
          </div>
        </div> */}
        {/* <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>Linked in :
                  {resumeData.linkedinId}
              </h4>
            </div>
          </aside>
        </div> */}
        <div className='contact-header'>
          <h2>Contact</h2>
          <p>Feel free to contact me for any work or suggestions below</p>
        </div>

        <div className='contact-input'>
          <div className='contact-top-inputs'>
            <input onChange={e => this.handleChange('name', e.target.value)}
              value={name}
              placeholder='NAME' type="text" />
            <input onChange={e => this.handleChange('email', e.target.value)}
              value={email}
              placeholder='EMAIL' type="text" />
          </div>

          <div>
            <textarea onChange={e => this.handleChange('msg', e.target.value)}
              value={msg}
              placeholder='MESSAGE' name="" id="" cols="30" rows="10"></textarea>
            <button onClick={this.handleSubmit}>Submit</button>
          </div>
        </div>


      </section>
    );
  }
}