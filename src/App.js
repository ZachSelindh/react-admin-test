import './App.css';

import * as React from "react";
import { Admin, Resource, ListGuesser,  EditGuesser } from 'react-admin';
import {UserList} from "./Components/User"
import {PostList, PostEdit} from "./Components/Post"
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
      <Admin dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} edit={PostEdit} />
        <Resource name="users" list={UserList} />
      </Admin>)

export default App;
