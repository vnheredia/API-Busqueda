export default function Details({ item, onBack }) {
  return (
    <div className="container">
      <button onClick={onBack}>← Volver</button>

      <h2>{item.name}</h2>

      <img
        className="detail-img"
        src={item.image?.original}
        alt=""
      />

      <div dangerouslySetInnerHTML={{ __html: item.summary }} />
    </div>
  );
}