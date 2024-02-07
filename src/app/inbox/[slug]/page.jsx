import { data } from "@/app/component/Main"

export default function page({params}) {

    const mailBox =data.find(datum => datum.title.split(' ').join('-').toLowerCase() == params.slug)
  return (
    <div>
        <h2>{mailBox.sender}</h2>
    </div>
  )
}
