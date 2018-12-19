import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { store } from '../store';
import { HomePageView, LoginPage, ArticleComponent, Register, Header, Footer, ResetPassword, ArticleInputComponents, updateArticleComponent, ProfilePage } from '../views/HomePage';


export const Main = () => (
  <Switch>
    <Route path="/create" component={ArticleInputComponents} />
    <Route exact path="/" component={HomePageView} />
    <Route path="/login/" component={LoginPage} />
    <Route path="/register" component={Register} />
    <Route path="/resetPassword" component={ResetPassword} />
    <Route path="/profile/:username" component={ProfilePage} />
    <Route path="/article/detail/:slug" component={ArticleComponent} />
    <Route exact path="/article/update/:slug" component={updateArticleComponent} />
  </Switch>
);

export const Routes = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
);
