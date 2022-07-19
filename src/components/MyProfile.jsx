import { useSelector } from 'react-redux';

const MyProfile = () => {
  const missionsL = useSelector((state) => state.missions);
  const newMissions = missionsL.filter((mission) => mission.joined);
  const rocketsL = useSelector((state) => state.rockets);
  const newRockets = rocketsL.filter((rocket) => rocket.canceled);
  return (
    <div>
      <div>
        <h2>My Missions</h2>
        <ul>
          {newMissions.length >= 1 ? (
            newMissions.map((mission) => (
              <li key={mission.name}>
                {mission.name} by {mission.manufacturer}
              </li>
            ))
          ) : (
            <li>You are not part of any mission</li>
          )}
        </ul>
      </div>
      <div>
        <h2>My Rockets</h2>
        <ul>
          {newRockets.length >= 1 ? (
            newRockets.map((rocket) => (
              <li key={rocket.rocket_name}>{rocket.rocket_name}</li>
            ))
          ) : (
            <li>No Rockets available </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
