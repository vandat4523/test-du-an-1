function NgonNguLapTrinh({
  name1,
  name2,
  name3,
  ten4 = "Du lieu khong ton tai",
}) {
  return (
    <ul>
      <li>{name1}</li>
      <li>{name2}</li>
      <li>{name3}</li>
      <li>{ten4}</li>
    </ul>
  );
}
export default NgonNguLapTrinh;
