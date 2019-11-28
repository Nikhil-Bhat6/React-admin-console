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
  Tab,
  DisabledInput,
  SimpleShowLayout,
  NumberInput,
  TabbedShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  RichTextField,
  SelectInput,
  DateInput,
  NumberField,
  DateField,
  EmailField,
  ReferenceManyField,
  SingleFieldList,
  ChipField,
  ReferenceInput,
  AutocompleteInput,
  ReferenceField
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

const StudentFilter = props => (
    <Filter {...props}>
	<TextInput label="Search" source="q" alwaysOn />
	<TextField source="student_name" label="Name" defaultValue="Test"/>

    </Filter>
);

 const StudentList = props => (
    <List {...props} filters={<StudentFilter />}> 
	
             <Datagrid rowClick="edit">
            
	    <TextField source="student_name" label="Name"/>
	    <TextField source="gender" />
            <TextField source="admission_number" />
	    <NumberField source="class" />
	    <TextField source="academic_year" />
            <TextField source="department" />
            <EditButton />
	    <ShowButton />
        </Datagrid>
    </List>
);

const StudentEdit = props => (
    <Edit {...props}>
        <SimpleForm>
        <DisabledInput source="id"/>
	<TextInput source="student_name" label="Name" />
	<TextInput source="gender" />    
	<NumberInput source="class" />
	<TextInput source="department" />
	<TextInput source="admission_number" />
	<TextInput source="academic_year" />
        <TextInput source="dob" label="Date Of Birth" />
        <TextInput source="doj" label="Date of Joining"/>  
	<TextInput source="father_name" label="Father's Name"/>
	<TextInput source="mother_name" label="Mother's Name"/>
	<TextInput source="phone" />
	<TextInput source="secondary_phone" />
	<TextInput source="email" />
	<TextInput source="address" />
	<TextInput source="city" />
	<TextInput source="country" />
	<TextInput source="location" />
	<TextInput source="pincode" />
	<TextInput source="blood_group" />
    	</SimpleForm>
    </Edit>
);
const StudentCreate = props => (
    <Create {...props}>
        <SimpleForm>
	    
	<TextInput source="student_name" label="Name" />
	<TextInput source="gender" />    
	<NumberInput source="class" />
	<TextInput source="department" />
	<TextInput source="admission_number" />
	<TextInput source="academic_year" />
        <TextInput source="dob" label="Date Of Birth" />
        <TextInput source="doj" label="Date of Joining"/>  
	<TextInput source="father_name" label="Father's Name"/>
	<TextInput source="mother_name" label="Mother's Name"/>
	<TextInput source="phone" />
	<TextInput source="secondary_phone" />
	<TextInput source="email" />
	<TextInput source="address" />
	<TextInput source="city" />
	<TextInput source="country" />
	<TextInput source="location" />
	<TextInput source="pincode" />
	<TextInput source="blood_group" /> 
        </SimpleForm>
    </Create>
);
const StudentShow = props => (
    <Show {...props}>
       <TabbedShowLayout>
	   <Tab label="Student Info">
            <TextField source="id" />
	    <TextField source="admission_number"/>
	    <TextField source="student_name" />
	    <TextField source="gender" />
	    <TextField source="class" />
	    <TextField source="blood_group" />
	    <TextField source="department" />
            <TextField source="location" />
            <TextField source="academic_year" />
            <TextField source="address" />
            <TextField source="city" />
            <TextField source="country" />
            <DateField source="dob" label="Date Of Birth" />
            <DateField source="doj" label="Date of Joining" />
	    <TextField source="pincode" />
     	</Tab>

	<Tab label="Parent Info">  
	    <TextField source="father_name" label="Father's Name"/>
	    <TextField source="mother_name" label="Mother's Name"/>
	    <TextField source="phone" />
	    <TextField source="secondary_phone" />
	    <TextField source="email" />
	</Tab>
     </TabbedShowLayout>
    </Show>
);

export {
 StudentList,
 StudentEdit,
 StudentCreate,
 StudentShow,
 
}
