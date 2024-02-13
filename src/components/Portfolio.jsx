import { useState } from 'react'
import filters from '../filters.js';
import Toolbar from './Toolbar.jsx';
import ProjectList from './ProjectList.jsx';

function Portfolio() {
  const [selected, setSelected] = useState(filters[0]);

  const onSelectFilter = (event, item) => {
    event.preventDefault();
    setSelected(item);
  }

  return (
    <>
      <Toolbar filters = {filters} selected = {selected} onSelectFilter = {onSelectFilter}/>
      <ProjectList category = {selected}/>
    </>
  )
}

export default Portfolio
