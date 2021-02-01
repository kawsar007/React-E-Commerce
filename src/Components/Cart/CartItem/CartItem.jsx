import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core'
import React from 'react';
import useStyles from './Styles';
const CartItem = ({item, onUpdateCartQty, onRemoveFromCart}) => {
    const classes = useStyles();

    return (
        <Card>
            <CardMedia image={item?.media?.source} alt={item.name} className={classes.media}/>
            <CardContent className={classes.cardContent}>
                 <Typography variant="h4">{item?.name}</Typography>
                 <Typography variant="h5">{item?.line_total?.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button type="button" onClick={() => onUpdateCartQty(item.id, item.quantity - 1)} size="small">-</Button>
                    <Typography>{item?.quantity}</Typography>
                    <Button type="button" onClick={() => onUpdateCartQty(item.id, item.quantity + 1)} size="small">+</Button>
                </div>
                <Button type="button" onClick={() => onRemoveFromCart(item.id)} variant="contained" color="secondary">Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem;