export default function Layout(props) {
  return (
    <>
      <div>{props.header}</div>
      <div>{props.content}</div>
      <div>{props.footer}</div>
    </>
  );
}
