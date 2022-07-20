import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchedRockets, updateRockets } from '../redux/rocket/rocket';
import './Rocket.scss';

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
        <div className="section" key={rocket.id}>
          <img className="rocket-image" src={rocket.flickr_image} alt="rocket" />
          <div className="description">
            <h2>{rocket.rocket_name}</h2>
            <p>
              <span>
                {rocket.canceled && <button className="btn btn-secondary" type="button">Reserved</button>}
              </span>
              {rocket.description}
            </p>
            {!rocket.canceled && (
              <button id={rocket.id} onClick={handleReserve} className="btn btn-primary mybtn" type="button">
                Reserve
              </button>
            )}
            {rocket.canceled && (
              <button id={rocket.id} onClick={handleReserve} className="btn btn-danger mybtn" type="button">
                Cancel
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rocket;
