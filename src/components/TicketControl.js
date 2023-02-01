import React, { useState } from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import EditTicketForm from './EditTicketForm';
import TicketDetail from './TicketDetail';

function TicketControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainTicketList, setMainTicketList] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [editing, setEditing] = useState(false);
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     formVisibleOnPage: false,
  //     mainTicketList: [],
  //     selectedTicket: null,
  //     editing: false
  //   };
  // }



  const handleClick = () => {
    if (selectedTicket != null) {
      setFormVisibleOnPage(false);
      // new code!
      setSelectedTicket(null);
      setEditing(false);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  }

  const handleDeletingTicket = (id) => {
    const newMainTicketList = mainTicketList.filter(ticket => ticket.id !== id);
    setMainTicketList(newMainTicketList);
    // new code!
    setSelectedTicket(null);
  }

  const handleEditClick = () => {
    // new code!
    setEditing(true);
  }

  const handleEditingTicketInList = (ticketToEdit) => {
    const editedMainTicketList = this.state.mainTicketList
      .filter(ticket => ticket.id !== this.state.selectedTicket.id)
      .concat(ticketToEdit);

    setMainTicketList(editedMainTicketList);

    this.setState({
      mainTicketList: editedMainTicketList,
      editing: false,
      selectedTicket: null
    });
  }

  const handleAddingNewTicketToList = (newTicket) => {
    const newMainTicketList = mainTicketList.concat(newTicket);

    setMainTicketList(newMainTicketList);
    setFormVisibleOnPage(false)
  }

  const handleChangingSelectedTicket = (id) => {

    // new code: updated variable name to 'selection'
    // so there's no clash with the state variable 'selectedTicket'
    const selection = mainTicketList.filter(ticket => ticket.id === id)[0];
    // new code!
    setSelectedTicket(selection);
  }


  let currentlyVisibleState = null;
  let buttonText = null;
  if (editing) {
    currentlyVisibleState =
      <EditTicketForm
        // new code: selectedTicket
        ticket={selectedTicket}
        onEditTicket={this.handleEditingTicketInList} />
    buttonText = "Return to Ticket List";

  } else if (selectedTicket != null) {
    currentlyVisibleState =
      <TicketDetail
        // new code: selectedTicket
        ticket={selectedTicket}
        onClickingDelete={this.handleDeletingTicket}
        onClickingEdit={this.handleEditClick} />
    buttonText = "Return to Ticket List";

  } else if (formVisibleOnPage) {
    currentlyVisibleState =
      <NewTicketForm
        onNewTicketCreation={handleAddingNewTicketToList} />;
    buttonText = "Return to Ticket List";

  } else {
    currentlyVisibleState =
      <TicketList
        onTicketSelection={handleChangingSelectedTicket}
        ticketList={mainTicketList} />;
    buttonText = "Add Ticket";
  }



  return (
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={this.handleClick}>{buttonText}</button>
    </React.Fragment>
  );
}


export default TicketControl;

