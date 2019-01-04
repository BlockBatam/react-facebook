import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
  card: {
    maxWidth: 1000,
    padding:'300px',
    paddingTop:'0px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title="Facebook News"
          subheader="Januari 4, 2019"
        />
        <CardMedia
          className={classes.media}
          image="https://www.facebook.com/images/fb_icon_325x325.png"
          title="facebook"
        />
        <CardContent>
          <Typography component="p">
          Liputan6.com, Jakarta - Sepanjang 2018, Facebook harus menghadapi cobaan berat terakit hal keamanan data penggunanya.
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragrap h>
            Liputan6.com, Jakarta - Sepanjang 2018, Facebook harus menghadapi cobaan berat terakit hal keamanan data penggunanya..
            </Typography>
            <Typography paragraph>
            Setelah kasus Cambridge Analytica, raksasa media sosial besutan Mark Zuckerberg itu seolah tak henti-hentinya diterpa masalah, khususnya keamanan data pengguna.

Privacy International (PI), organisasi nirlaba yang menangani masalah proteksi dan keamanan data, belum lama ini menemukan fakta menarik berhubungan dengan Facebook dan aplikasi Android.

Dilansir The Daily Dot, Rabu (2/1/2019), tim Privacy International mengungkap, banyak aplikasi Android yang ternyata berbagi informasi data ke Facebook, terlepas apakah mereka memiliki akun atau tidak.

Yang pasti, hasil investigasi ini menimbulkan pertanyaan besar tentang transparansi media sosial dalam menangani data pengguna (dan non-pengguna).

Tim PI menguji sekitar 34 aplikasi Android terpopuler dalam rentang waktu Agustus dan Desember 2018. Ditemukan, hampir dua pertiga aplikasi tersebut mengirim data ke Facebook sesaat setelah dibuka.

Lewat data yang dikirim tersebut, Facebook dapat mengetahui secara tepat seberapa sering orang menggunakan aplikasi tertentu, sekaligus mengumpulkan data lain yang memungkinkan perusahan membuat profil terperinci.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);