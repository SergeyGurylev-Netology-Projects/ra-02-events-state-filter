import projects from '../projects.js';
import filters from '../filters.js';

function ProjectList({category}) {
  const filteredCards = projects.filter(item=> item.category === category || category === filters[0]);

  return (
    <>
      <div className="columns-3">
        {projects.
          filter(item=> item.category === category || category === filters[0]).
          map((item, index) =>
          <img key={index} className="w-full mb-4" src={item.img}/>
        )}
      </div>
    </>
  )
}

export default ProjectList
