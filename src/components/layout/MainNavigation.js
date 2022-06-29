import { NavLink } from 'react-router-dom'
import classes from './MainNavigation.module.css'

const MainNavigation = () => {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>Expense Tracker</div>
			<nav className={classes.nav}>
				<ul>
					<li>
						<NavLink to='/form' activeClassName={classes.active}>
							Form
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/new-list'
							activeClassName={classes.active}
						>
							New list
						</NavLink>
					</li>
					<li>
						<NavLink
							to='chart-bar'
							activeClassName={classes.active}
						>
							Chart Bar
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default MainNavigation
