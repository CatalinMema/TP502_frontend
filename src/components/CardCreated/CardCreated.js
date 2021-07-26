import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
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
function CardCreated({title,ingredients,time,prep_mode}) {
  const classes = useStyles();
    return (
      <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
           
          </IconButton>
        }
        title={title}
        subheader={`${time} min`}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Ingredients: {ingredients}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="show more"
        >
        </IconButton>
      </CardActions>
   
      
      <CardContent>
      Preparation:{prep_mode}
      </CardContent>
   
      
    </Card>
    )
}

export default CardCreated
