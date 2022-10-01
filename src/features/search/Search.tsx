import { UserOutlined } from '@ant-design/icons';
import { AutoComplete, Input } from 'antd';
import React from 'react';

const renderTitle = (title: string) => (
  <span>
    {title}
    <a
      style={{ float: 'right' }}
      href="https://www.google.com/search?q=tshirts"
      target="_blank"
      rel="noopener noreferrer"
    >
      more
    </a>
  </span>
);

const renderItem = (title: string, count: number) => ({
  value: title,
  label: (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {title}
      <span>
        <UserOutlined /> {count}
      </span>
    </div>
  ),
});

const options = [
  {
    label: renderTitle('Men'),
    options: [renderItem('T Shirts', 10000), renderItem('Casual Shirts', 10600)],
  },
  {
    label: renderTitle('Women'),
    options: [renderItem('Kurtas', 60100), renderItem('Wester wear', 30010)],
  },
  {
    label: renderTitle('Kids'),
    options: [renderItem('1 year & above', 100000)],
  },
];

const Search: React.FC = () => (
  <AutoComplete
    popupClassName="certain-category-search-dropdown"
    dropdownMatchSelectWidth={500}
    style={{ width: '60%' , margin: '0 auto'}}
    options={options}
  >
    <Input.Search size="large" placeholder="Search Items" />
  </AutoComplete>
);



export default Search;