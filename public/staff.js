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
	<TextField source="name" />
	<TextField source="gender" />
	<TextField source="class" />
	<TextField source="phone" />
	<TextField source="role" />
	<TextField source="department" />
	<TextField source="email" />
	    <EditButton />
	    <ShowButton />
        </Datagrid>
    </List>
); 

const StaffEdit = props => (
    <Edit {...props}>
        <SimpleForm>
    <DisabledInput source="id" />
    <TextField source="name" />
	<TextInput source="gender" />
	<TextInput source="class" />
	<TextInput source="phone" />
	<TextInput source="role" />
	<TextInput source="department" />
	<TextInput source="dateOfJoining" />
	<TextInput source="email" />
	<TextInput source="dob" />
	<TextInput source="location" />	
	<TextInput source="address" />
	<TextInput source="city" />
	<TextInput source="country" />
	<TextInput source="pincode" />
           
        </SimpleForm>
    </Edit>
);
const StaffCreate = props => (
    <Create {...props}>
        <SimpleForm>
          
    <DisabledInput source="id" />
    <TextField source="name" />
	<TextInput source="gender" />
	<TextInput source="class" />
	<TextInput source="phone" />
	<TextInput source="role" />
	<TextInput source="department" />
	<TextInput source="dateOfJoining" />
	<TextInput source="email" />
	<TextInput source="dob" />
	<TextInput source="location" />	
	<TextInput source="address" />
	<TextInput source="city" />
	<TextInput source="country" />
	<TextInput source="pincode" />
        </SimpleForm>
    </Create>
);
const StaffShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
        		<TextField source="name" />
	<TextField source="gender" />
	<TextField source="class" />
	<TextField source="phone" />
	<TextField source="role" />
	<TextField source="department" />
	<TextField source="dateOfJoining" />
	<TextField source="email" />
	<TextField source="dob" />
	<TextField source="location" />	
	<TextField source="address" />
	<TextField source="city" />
	<TextField source="country" />
	<TextField source="pincode" />
        </SimpleShowLayout>
    </Show>
);
export {
 StaffList,
 StaffEdit,
StaffCreate,
StaffShow,
}

