import UserListItem from './UsersListItem';

export default {
  title: 'Components/Molecules/UserListItem',
  component: UserListItem,
};

const mockedData = {
  name: 'Adam Romański',
  attendance: '55%',
  average: '5',
};

const Template = (args) => <UserListItem userData={mockedData} {...args} />;

export const Default = Template.bind({});

Default.args = {};
