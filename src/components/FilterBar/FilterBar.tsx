import React from 'react';
import { Filter } from 'lucide-react';
import { FilterType } from '../../types/filter';
import { FilterButton } from './FilterButton';
import { FILTER_OPTIONS } from '../../config/constants';

interface FilterBarProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ filter, onFilterChange }) => {
  return (
    <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm mb-6">
      <Filter className="text-gray-500" />
      <FilterButton
        active={filter === FILTER_OPTIONS.ALL}
        onClick={() => onFilterChange(FILTER_OPTIONS.ALL)}
      >
        Todos
      </FilterButton>
      <FilterButton
        active={filter === FILTER_OPTIONS.AVAILABLE}
        onClick={() => onFilterChange(FILTER_OPTIONS.AVAILABLE)}
      >
        Disponibles
      </FilterButton>
      <FilterButton
        active={filter === FILTER_OPTIONS.UNAVAILABLE}
        onClick={() => onFilterChange(FILTER_OPTIONS.UNAVAILABLE)}
      >
        No Disponibles
      </FilterButton>
    </div>
  );
};