// Іmport useSelector, useDispatch
import { useSelector, useDispatch } from 'react-redux';
// Import action
import { setFilter } from 'redux/filterSlice';
// Import selector
import { getFilter } from 'redux/selectors';
// Import styled components
import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';

// Contact filter
export function Filter() {
 //Delete the value of the filter
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  // Change the value of the filter
  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <FilterContainer>
      <FilterLabel>
        Find contacts by name
        <FilterInput type="text" value={filter} onChange={handleFilterChange} />
      </FilterLabel>
    </FilterContainer>
  );
}
