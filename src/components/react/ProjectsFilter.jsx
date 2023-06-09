import { useState } from 'react'
import { ProjectsData, filters } from '../../utils/data'
import { Project } from './Project'
import {
  CSSTransition,

  TransitionGroup
} from 'react-transition-group'

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
            }}
            key={f}>
            {f}
          </p>
        ))}
      </div>

      <TransitionGroup className='w-full flex justify-center flex-col items-center gap-y-8'>
        {[...projects]
          .filter((project) => project.tag.includes(filter))
          .map((project) => (
            <CSSTransition
              key={project.title}
              classNames='fade'
              addEndListener={(node, done) =>
                node.addEventListener('transitionend', done, false)
              }>
              <Project project={project} key={project.title} />
            </CSSTransition>
          ))}
      </TransitionGroup>
    </>
  )
}
