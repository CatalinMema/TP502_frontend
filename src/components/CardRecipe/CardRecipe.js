import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import Modal from '@material-ui/core/Modal';
import CardCreated from '../CardCreated/CardCreated';
import CloseSharpIcon from '@material-ui/icons/CloseSharp';
function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  const useStylesModal = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft:'auto',
    marginRight:'auto',
    maxWidth: 350,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
 

function CardRecipe({title,ingredients,time,prep_mode}) {
  const classes = useStyles();
  const classesModal = useStylesModal();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
    return (
      <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton onClick={handleOpen} aria-label="settings">
            <ViewModuleIcon />
          </IconButton>
        }
        title={title}
        subheader={`${time} min`}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
         <div style={modalStyle} className={classesModal.paper}>
         {/* <button onClick={handleClose}>Close</button> */}
         <div  style={{display:'flex',justifyContent:'flex-end'}}>
         <IconButton onClick={handleClose} aria-label="settings">
            <CloseSharpIcon />
          </IconButton></div>
         <CardCreated title={title} ingredients={ingredients} time={time} prep_mode={prep_mode} />
    
    </div>
      </Modal>
    </Card>
    )
}

export default CardRecipe
