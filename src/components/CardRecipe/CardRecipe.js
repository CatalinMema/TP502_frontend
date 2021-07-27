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
import { selectEmail } from '../../features/userEmailSlice';
import { useSelector } from 'react-redux';

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
      backgroundColor: theme.palette.grey,
      // border: '2px solid white',
      outline: 'none',
      padding: theme.spacing(0, 2, 2),
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
 

function CardRecipe({id,title,time}) {
  const classes = useStyles();
  const classesModal = useStylesModal();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const userEmail = useSelector(selectEmail);
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
            {userEmail[0].toUpperCase()}
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
            <CloseSharpIcon style={{backgroundColor:'white',borderRadius:'50%'}} />
          </IconButton></div>
         <CardCreated id={id} />
    
    </div>
      </Modal>
    </Card>
    )
}

export default CardRecipe
