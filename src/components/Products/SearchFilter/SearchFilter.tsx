import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useProducts } from '../../../hooks';

import { Empty, type AutoCompleteProps } from 'antd';
import { Icon } from '../..';
import { StyledSearchInput, StyledSearchContent } from './SearchFilter.styled';

import { setFilters } from '../../../redux/products';
import { getProductsNames } from '../../../helpers';
import type { AppDispatch } from '../../../redux';

const SearchFilter: React.FC<AutoCompleteProps> = () => {
  const [data, setData] = useState<AutoCompleteProps['options']>([]);
  const dispatch = useDispatch<AppDispatch>();
  const { filters } = useProducts();

  const handleSearch = (value: string) => {
    dispatch(setFilters({ ...filters, search: value && value.toLowerCase() }));
    getProductsNames(value.toLowerCase(), setData);
  };

  const handleClear = () => {
    dispatch(setFilters({ ...filters, search: '' }));
    setData([]);
  };

  const handleChange = value => {
    dispatch(setFilters({ ...filters, search: value && value.toLowerCase() }));
  };

  return (
    <StyledSearchInput
      showSearch
      value={filters.search}
      placeholder="Search"
      dropdownRender={menu => <StyledSearchContent>{menu}</StyledSearchContent>}
      dropdownStyle={{
        backgroundColor: '#1C1C1C',
        borderRadius: 12,
      }}
      suffixIcon={
        <Icon
          iconWidth={{ mobile: '18px', tablet: '18px' }}
          iconHeight={{ mobile: '18px', tablet: '18px' }}
          name="search"
          stroke="#EFEDE8"
        />
      }
      allowClear={{
        clearIcon: (
          <Icon
            iconWidth={{ mobile: '20px', tablet: '20px' }}
            iconHeight={{ mobile: '16px', tablet: '16px' }}
            name="x"
            stroke="#fff"
          />
        ),
      }}
      onSearch={handleSearch}
      onChange={handleChange}
      onClear={handleClear}
      defaultActiveFirstOption={false}
      filterOption={(input, option) => (option?.value ?? '').includes(input)}
      options={data?.map(item => ({
        value: item.title.toLowerCase(),
        label: item.title.toLowerCase(),
      }))}
      removeIcon={
        <Icon
          iconWidth={{ mobile: '20px', tablet: '20px' }}
          iconHeight={{ mobile: '16px', tablet: '16px' }}
          name="x"
          stroke="#fff"
        />
      }
      notFoundContent={<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
    />
  );
};

export default SearchFilter;
