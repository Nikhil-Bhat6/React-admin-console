// in src/posts.js
import * as React from "react";
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  Filter,
  DisabledInput,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  RichTextField,
  SelectInput
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

export const StudentList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="Location" />
            <TextField source="academicYear" />
            <TextField source="address" />
            <TextField source="city" />
            <TextField source="class" />
            <TextField source="country" />
            <TextField source="dateOfJoining" />
            <TextField source="department" />
            <TextField source="dob" />
            <TextField source="gender" />
            <TextField source="name" />
            <TextField source="pincode" />
            <TextField source="profilePhoto" />
        </Datagrid>
    </List>
);

​
