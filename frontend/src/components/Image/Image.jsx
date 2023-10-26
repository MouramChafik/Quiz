import propTypes from "prop-types";

export default function Image({ film }) {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${film.backdrop_path}`}
        alt="Film a trouver"
      />
      <p>{film.title} </p>
    </div>
  );
}

Image.defaultProps = {
  film: { title: "Veuillez attendre votre film" },
};
Image.propTypes = {
  film: propTypes.shape({
    title: propTypes.string,
    backdrop_path: propTypes.string,
  }),
};
