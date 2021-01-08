import * as React from "react";
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  DisabledInput,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DateInput,
  NumberField,
  DateField,
  EmailField,
  NumberInput,
} from "react-admin";

const ParentList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="admission number" />
      <TextField source="blood group" />
      <NumberField source="class" />
      <DateField source="dob" />
      <EmailField source="email" />
      <NumberField source="phone" />
      <TextField source="profession" />
      <TextField source="relationship" />
      <TextField source="pname" />
      <EditButton />
      <ShowButton />
    </Datagrid>
  </List>
);
const ParentEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="blood group" />
      <TextInput source="admission number" />
      <NumberInput source="class" />
      <DateInput source="dob" />
      <TextInput source="email" />
      <NumberInput source="phone" />
      <TextInput source="profession" />
      <TextInput source="relationship" />
      <TextInput source="pname" />
    </SimpleForm>
  </Edit>
);
const ParentCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="admission number" />
      <TextInput source="blood group" />
      <NumberInput source="class" />
      <DateInput source="dob" />
      <TextInput source="email" />
      <NumberInput source="phone" />
      <TextInput source="profession" />
      <TextInput source="relationship" />
      <TextInput source="pname" />
    </SimpleForm>
  </Create>
);
const ParentShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="admission number" />
      <TextField source="blood group" />
      <NumberField source="class" />
      <DateField source="dob" />
      <EmailField source="email" />
      <NumberField source="phone" />
      <TextField source="profession" />
      <TextField source="relationship" />
      <TextField source="pname" />
    </SimpleShowLayout>
  </Show>
);

export { ParentList, ParentEdit, ParentCreate, ParentShow };
