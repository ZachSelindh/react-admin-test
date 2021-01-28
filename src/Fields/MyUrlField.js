import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
import LaunchIcon from '@material-ui/icons/Launch';

// useStyles is a hook made by the makeStyles method from MaterialUI
const useStyles = makeStyles({
    link: {
        textDecoration: 'none',
    },
    icon: {
        width: '0.5em',
        paddingLeft: 2,
    },
});

const MyUrlField = ({record = {}, source }) => {
    // classes is derived from the makeStyles method input object
    const classes = useStyles();
    return (
        <a href={record[source]} className={classes.link}>
            {record[source]}
            <LaunchIcon className={classes.icon} />
        </a>
    );
}

export default MyUrlField;