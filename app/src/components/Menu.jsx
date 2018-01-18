import React, {Component}  from 'react'
import styles from '../styles/local.css'
import Link from '../components/Link.jsx'
export default class Menu extends Component {
    render() {
        return (
            <div>
                <h3>Library Catalog</h3>
                <p>The Library Catalog is an organisational tool for keeping track of the books you read.</p>
                <Link to='https://github.com/lordexetor/library-catalog'>Look here for help.</Link>
            </div>
        );
    }
}
