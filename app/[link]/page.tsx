interface Props {
  params: Promise<{ link: string }>
}
export default async function page(props: Props) {
  const {link} = await props.params
  return <div>hello {link.replaceAll("%20", " ")}</div>
}
