import * as React from "react";
import { List, 
    Filter,
    Datagrid, 
    TextField, 
    ReferenceField, 
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput, } from 'react-admin';

// Helper Component for Filtered searching on PostList
const PostFilter = (props) => (
        <Filter {...props}>
            <TextInput label="Search" source="q" alwaysOn />
            <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
        </Filter>
    );

export const PostList = props => (
    <List filters={<PostFilter />}{...props}>
       <Datagrid>
           <TextField source="id" />
{/* ReferenceField simply fetchs refernce data as passes it as record to its children */}
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
           <EditButton />
        </Datagrid>
    </List>
);

// Helper Component to add title to top of Edit page
const PostTitle = ({ record }) => {
        return <span>Post {record ? `"${record.title}"` : ''}</span>;
    };

export const PostEdit = props => (
    <Edit title={<PostTitle />}{...props}>
        <SimpleForm>
        <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
                </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
                </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);