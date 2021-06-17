import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import {
	BrowserRouter,
	Route,
	RouteComponentProps,
	Switch,
} from 'react-router-dom';
import './App.css';
import { ContentWrapper, Wrapper } from './App.styles';
import HeroHeader from './components/HeroHeader/HeroHeader';
import { routes } from './routes';
import { theme } from './shared/variables/theme';

function App() {
	return (
		<Wrapper>
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<Switch>
						{routes.map((route, index) => {
							return (
								<Route
									key={index}
									path={route.path}
									exact={route.exact}
									render={(
										props: RouteComponentProps<any>
									) => (
										<ContentWrapper>
											<HeroHeader />
											<route.component
												name={route.name}
												{...props}
												{...route.props}
											/>
										</ContentWrapper>
									)}
								></Route>
							);
						})}
					</Switch>
				</BrowserRouter>
			</ThemeProvider>
		</Wrapper>
	);
}

export default App;
