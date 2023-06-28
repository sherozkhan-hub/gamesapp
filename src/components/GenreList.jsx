import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { data } = useGenre();
  //   console.log(genre);
  return (
    <ul>
      {data.map((g) => (
        <li key={g.id}> {g.name}</li>
      ))}
    </ul>
  );
};
export default GenreList;
