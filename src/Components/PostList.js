import * as React from "react";
import { List, Datagrid, TextField, ReferenceField } from 'react-admin';

export const PostList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            {/* ReferenceField simply fetchs refernce data as passes it as record to its children */}
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
        </Datagrid>
    </List>
);