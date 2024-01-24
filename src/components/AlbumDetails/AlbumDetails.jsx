import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";

export const AlbumDetails = () => {
  const album = useSelector((state) => state.music.selectedAlbum);
  const error = useSelector(state => state.errors.status)
  const isLoading = useSelector((state) => state.music.loading);
  return (
    <>
      {isLoading && !error ? (
        <Loading />
      ) : !album ? (
        "No album selected"
      ) : (
        <div>
          <img src={album.cover_xl} className="w-100" />
          <h1>{album.title}</h1>
          <ol>
            {album.tracks.data.map((track) => (
              <li>{track.title}</li>
            ))}
          </ol>
        </div>
      )}
    </>
  );
};
