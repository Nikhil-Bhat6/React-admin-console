// in src/students.js
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
  SelectInput,
  DateInput
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

const StaffList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="ROLE" />
            <TextField source="address" />
            <TextField source="city" />
            <TextField source="country" />
            <TextField source="dateOfJoining" />
            <TextField source="department" />
            <TextField source="dob" />
            <TextField source="emailID" />
            <TextField source="gender" />
            <TextField source="location" />
            <TextField source="name" />
            <TextField source="phone" />
            <TextField source="pincode" />
            <TextField source="profilePhoto" />
	    <EditButton />
	    <ShowButton />
        </Datagrid>
    </List>
); 

const StaffEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="ROLE" />
            <TextInput source="address" />
            <TextInput source="city" />
            <TextInput source="country" />
            <TextInput source="dateOfJoining" />
            <TextInput source="department" />
            <DateInput source="dob" />
            <TextInput source="emailID" />
            <TextInput source="gender" />
            <TextInput source="location" />
            <TextInput source="name" />
            <TextInput source="phone" />
            <TextInput source="pincode" />
            <TextInput source="profilePhoto" />
        </SimpleForm>
    </Edit>
);
const StaffCreate = props => (
    <Create {...props}>
        <SimpleForm>
          
            <TextInput source="ROLE" />
            <TextInput source="address" />
            <TextInput source="city" />
            <TextInput source="country" />
            <TextInput source="dateOfJoining" />
            <TextInput source="department" />
            <DateInput source="dob" />
            <TextInput source="emailID" />
            <TextInput source="gender" />
            <TextInput source="location" />
            <TextInput source="name" />
            <TextInput source="phone" />
            <TextInput source="pincode" />
            <TextInput source="profilePhoto" />
        </SimpleForm>
    </Create>
);
const StaffShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
           <TextField source="id" />
            <TextField source="ROLE" />
            <TextField source="address" />
            <TextField source="city" />
            <TextField source="country" />
            <TextField source="dateOfJoining" />
            <TextField source="department" />
            <TextField source="dob" />
            <TextField source="emailID" />
            <TextField source="gender" />
            <TextField source="location" />
            <TextField source="name" />
            <TextField source="phone" />
            <TextField source="pincode" />
            <TextField source="profilePhoto" />
        </SimpleShowLayout>
    </Show>
);
export {
 StaffList,
 StaffEdit,
StaffCreate,
StaffShow,
}

