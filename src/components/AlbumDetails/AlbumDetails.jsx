import { useSelector } from "react-redux";

export const AlbumDetails = () => {
  const album = useSelector((state) => state.music.selectedAlbum);
  return (
    <>
      {!album ? (
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
