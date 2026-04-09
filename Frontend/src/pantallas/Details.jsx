export default function Details({ item, onBack }) {
  return (
    <div>
      <button onClick={onBack}>← Volver</button>

      <h2>{item.name}</h2>
      <img src={item.image?.original} alt="" width="300" />

      <div dangerouslySetInnerHTML={{ __html: item.summary }} />
    </div>
  );
}