export default function Box({ ...item }) {
  return (
    <>
      <section style={{ backgroundColor: item.color }} className="p-3">
        {item.title}
        <br />
        {item.desc}
      </section>
    </>
  );
}
