import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import rocket, { fetchedRockets, updateRockets } from '../redux/rocket/rocket';

const Rocket = () => {
  const dispatch = useDispatch();
  const allRockets = useSelector((state) => state.rockets);
  useEffect(() => {
    if (!allRockets.length) dispatch(fetchedRockets());
  }, [dispatch]);

  const handleReserve = ({ target }) => {
    const { id } = target;
    dispatch(updateRockets(Number(id)));
  };

  return (
    <div>
      {allRockets.map((rocket) => (
        <div key={rocket.id}>
          <div className="rocket-image">
            <img src={rocket.flickr_image} alt="rocket image" />
          </div>

          <h2>{rocket.rocket_name}</h2>
          <p>
            <span>
              {rocket.canceled && <button type="button">Reserved</button>}
            </span>
            {rocket.description}
          </p>
          {!rocket.canceled && (
            <button id={rocket.id} onClick={handleReserve} type="button">
              Reserve
            </button>
          )}
          {rocket.canceled && (
            <button id={rocket.id} onClick={handleReserve} type="button">
              Cancel
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Rocket;
