export default function Card({ item, onSelect }) {
  return (
    <div onClick={() => onSelect(item)} style={{ border: "1px solid #ccc", padding: "10px", cursor: "pointer" }}>
      <img src={item.image?.medium} alt="" width="100%" />
      <h4>{item.name}</h4>
    </div>
  );
}