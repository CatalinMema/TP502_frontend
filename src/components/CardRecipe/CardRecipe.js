import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openModal, selectRecipeToShow } from '../../features/recipeSlice';
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
  const dispatch = useDispatch();
  const addRecipeForModal = () => {
    dispatch(openModal());
    dispatch(selectRecipeToShow(({title,ingredients,time,prep_mode})))
  }
    return (
      <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton onClick={addRecipeForModal} aria-label="settings">
            <ViewModuleIcon />
          </IconButton>
        }
        title={title}
        subheader={`${time} min`}
      />

    </Card>
    )
}

export default CardRecipe
