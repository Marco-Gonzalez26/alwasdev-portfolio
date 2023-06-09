export function Project({ project }) {
  return (
    <div class='bg-white rounded-xl lg:w-3/4 p-6 flex flex-col  items-center justify-center gap-4 transition-all h-full lg:odd:flex-row-reverse lg:flex-row  shadow-lg min-h-[400px]'>
      <img
        src={project?.img}
        class='object-cover rounded-lg w-10/12 lg:w-1/2 shadow-md shadow-gray-400'
      />

      <div class='h-full items-start justify-center lg:w-1/2 text-center gap-4'>
        <h4 class={` font-bold text-xl lg:text-2xl mb-4 ${project?.textColor}`}>
          {project?.title}
        </h4>
        <p class='text-gray-500 font-semibold  lg:text-xl '>
          {project?.description}
        </p>
        <div class='flex justify-center items-center mt-6 w-full gap-x-6'>
          {project?.stack.map((tech) => (
            <img
              title={tech.title}
              src={tech.img}
              class='h-14 w-14'
              key={tech.title}
            />
          ))}
        </div>
        <div class='flex justify-center items-center mt-6 w-full gap-x-6 font-semibold'>
          <a
            href={project.code}
            class='flex gap-x-2 hover:scale-105 transition-all'>
            <img src='/github.svg' class=' h-6 w-6' />
            Code
          </a>
          <a
            href={project.demo}
            class='flex gap-x-2 hover:scale-105 transition-all'>
            <img src='/web-link.svg' class='h-6 w-6' />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  )
}
