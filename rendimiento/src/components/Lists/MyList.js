import { memo } from 'react'

const Li = ({ fullname }) => {
  console.log(`renderizando ${fullname}`)
  return (
    <li>
      {fullname}
    </li>
  )
}

const Mli = memo(Li)

const MyList = ({ data }) => {
  console.log('renderizando lista')
  return (
    <ul>
      {data.map(x =>
        <Mli
          key={x.name + x.lastname}
          fullname={`${x.name} ${x.lastname}`}
        />
      )}
    </ul>
  )
}

export default MyList
