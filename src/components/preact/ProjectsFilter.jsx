import { useState } from 'preact/hooks'
import { ProjectsData, filters } from '../../utils/data'
import { Project } from './Project'

export function ProjectsFilter() {
  const [projects, setProjects] = useState(ProjectsData)
  const [filter, setFilter] = useState('all')
  return (
    <>
      <div className='gap-2 flex justify-center'>
        {filters.map((f) => (
          <p
            className='py-2 px-4 rounded-xl border-2 border-blue-900 text-blue-950  capitalize hover:opacity-80 hover:scale-105 transition-all cursor-pointer font-semibold'
            onClick={() => setFilter(f)}
            style={{
              background: f === filter ? 'rgb(30 58 138)' : '',
              color: f === filter ? '#fff' : ''
            }}>
            {f}
          </p>
        ))}
      </div>

      {projects
        .filter((project) => project.tag.includes(filter))
        .map((project) => (
          <Project project={project} />
        ))}

       <p className='text-center text-lg font-semibold text-gray-700'>I'm adding all my projects really soon! 😁</p> 
    </>
  )
}
