import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import axios from 'axios';
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
function CardCreated({id}) {
  const [recipeData,setRecipeData] = useState([]);
  useEffect(()=>{
    axios.get(`/recipes/recipe/${id}`).then(res => setRecipeData(res.data))
},[id])
console.log(recipeData)
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
       title={recipeData.title}
        subheader={`${recipeData.time} min`}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         Ingredients: {recipeData.ingredients}
         </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="show more"
        >
        </IconButton>
      </CardActions>
   
      
      <CardContent>
      Preparation:{recipeData.preparation_mode}
      </CardContent>
   
      
    </Card>
    )
}

export default CardCreated
