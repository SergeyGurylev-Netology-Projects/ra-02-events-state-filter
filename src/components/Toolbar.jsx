
function Toolbar({filters, selected, onSelectFilter}) {
  return (
    <>
      <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
          {filters.map(item =>
            <li key={item}>
              <a href="#" onClick={event => onSelectFilter(event, item)} className={"block" + (item === selected ? " bg-slate-200" : "")}>{item}</a>
            </li>
          )}
        </ul>
      </div>
    </>
  )
}

export default Toolbar
